import { render, screen, waitFor } from '@testing-library/react'
import { afterEach, beforeEach } from 'node:test'
import { describe, expect, test, vi } from 'vitest'
import UserList from '../Classes/UserList'

const mockData = {
    users: [
        { id: 1, firstName: 'Emily', email: 'emily.johnson@x.dummyjson.com' },
        { id: 2, firstName: 'Michael', email: 'michael.williams@x.dummyjson.com' },
        { id: 3, firstName: 'Sophia', email: 'sophia.brown@x.dummyjson.com' },
        { id: 4, firstName: 'James', email: 'james.davis@x.dummyjson.com' },
        { id: 5, firstName: 'Emma', email: 'emma.miller@x.dummyjson.com' },
    ],
}

describe('UserList Component', () => {
    beforeEach(() => {
        global.fetch = vi.fn().mockResolvedValue({
             json:async () =>(mockData)
        })
    })
    afterEach(()=>{
        vi.clearAllMocks()
    })

    test('Rendering Counter Component', async() => {
        render(<UserList />)
        expect(screen.getByText('Loading...')).toBeInTheDocument()
        await waitFor(()=>{
            expect(screen.getByText(/Users List:/i)).toBeInTheDocument()
        })

        expect(screen.getByText('Emily')).toBeDefined()
        expect(screen.getByText('Michael')).toBeDefined()
        expect(screen.getByText('Sophia')).toBeDefined()
        expect(screen.getByText('James')).toBeDefined()
        expect(screen.getByText('Emma')).toBeDefined()
    })
})