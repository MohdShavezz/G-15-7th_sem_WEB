import {describe, expect, test} from 'vitest'
import {render,screen,fireEvent} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from '../App'

describe('App Component Testing',()=>{
    test('Rendering Counter Component',()=>{
        render(<App/>)
        const homeElems=screen.getAllByText(/Home/i)
        expect(homeElems.length).toBeGreaterThan(1)
        expect(homeElems[0]).toBeInTheDocument()
    })
    test('navigate to counter route',async()=>{
        render(<App/>)
        // fireEvent.click(screen.getByText('Counter'))
        // expect(screen.getByText(/Counter:/i)).toBeInTheDocument()
        // expect(screen.getAllByRole('heading',{name:'Count: 0'}))

        await userEvent.click(screen.getByText('Counter'))
        expect(screen.getByText(/Counter:/i)).toBeInTheDocument()
        expect(screen.getAllByRole('heading',{name:'Count: 0'}))
    })
 
})