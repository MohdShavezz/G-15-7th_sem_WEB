import { renderHook, waitFor } from '@testing-library/react'
import { vi, describe, test, expect, beforeEach, afterEach } from 'vitest'
import useFetchUser from '../Hook/useFetchUsers'

// Mock data returned by the API
const mockData = {
  users: [
    { id: 1, firstName: 'Emily', email: 'emily.johnson@x.dummyjson.com' },
    { id: 2, firstName: 'Michael', email: 'michael.williams@x.dummyjson.com' },
  ],
}

describe('useFetchUser Hook', () => {
  beforeEach(() => {
    global.fetch = vi.fn().mockResolvedValue({
      json: async () => mockData,
    }) 
  })
  afterEach(() => {
    vi.clearAllMocks()
  })

  test('should fetch and return user data successfully', async () => {
    const { result } = renderHook(() =>
      useFetchUser('https://dummyjson.com/users')
    )
    expect(global.fetch).toHaveBeenCalledWith('https://dummyjson.com/users')
    // Initially loading should be true
    expect(result.current.loading).toBe(true)
    expect(result.current.data).toEqual([])
    expect(result.current.error).toBeNull()

    // Wait for fetch to resolve
    await waitFor(() => {
      expect(result.current.loading).toBe(false)
    })

    // After fetch completes
    expect(result.current.data).toEqual(mockData.users)
    expect(result.current.error).toBeNull()
    expect(global.fetch).toHaveBeenCalledTimes(1)
  })

  test('should handle fetch errors', async () => {
    // Make fetch reject
    global.fetch = vi.fn().mockRejectedValueOnce(new Error('Network Error')) as any

    const { result } = renderHook(() =>
      useFetchUser('https://dummyjson.com/users')
    )

    expect(global.fetch).toHaveBeenCalledWith('https://dummyjson.com/users')
    // Initially loading should be true
    expect(result.current.loading).toBe(true)
    
    await waitFor(() => {
      expect(result.current.loading).toBe(false)
    })

    expect(result.current.error).toBe('Network Error')
    expect(result.current.data).toEqual([])
  })
})
