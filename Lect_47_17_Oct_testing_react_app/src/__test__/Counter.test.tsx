import {describe, expect, test} from 'vitest'
import {render,screen,fireEvent} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Counter from '../Classes/Counter'

describe('Counter App Testing',()=>{
    test('Rendering Counter Component',()=>{
        render(<Counter/>)
        expect(screen.getByText(/Counter:/i)).toBeInTheDocument()
        expect(screen.getAllByRole('heading',{name:'Count: 0'}))
    })
    test('Count Button INC DEC RESET features test',()=>{
        render(<Counter/>)
        const INC=screen.getByText('INC')
        const DEC=screen.getByText('DEC')
        const RESET=screen.getByText('RESET')
        expect(INC).toBeDefined()
        expect(DEC).toBeDefined()
        expect(RESET).toBeDefined()
        fireEvent.click(INC)
        fireEvent.click(INC)
        expect(screen.getAllByText('Count: 2')).toBeDefined()
        fireEvent.click(DEC)
        expect(screen.getAllByText('Count: 1')).toBeDefined()
        fireEvent.click(RESET)
        expect(screen.getAllByText('Count: 0')).toBeDefined()

    })
    test('Input Count Get Value',async()=>{
        render(<Counter/>)
        expect(screen.getByText(/Counter:/i)).toBeInTheDocument()
        const input = screen.getByPlaceholderText('Enter Count')  
        await userEvent.type(input, '22')  
        expect(input).toHaveValue('22')  
    })
})