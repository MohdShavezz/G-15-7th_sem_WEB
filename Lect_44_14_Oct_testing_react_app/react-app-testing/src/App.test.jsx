import { fireEvent, getByRole, render, screen } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, test } from "vitest";
import App from "./App";


describe('App is testing',()=>{
    // beforeEach(()=>{
    //     console.log('before each')
    // })
    // afterEach(()=>{
    //     console.log('after each')
    // })
   it.only('Rendering App Component',()=>{
        render(<App/>)
        expect(screen.getByText("Vite + React")).toBeInTheDocument()
        // screen.debug(undefined,10000)  //console.log
    })
    test('Increment Count',()=>{
        render(<App/>)
        expect(screen.getByText("Vite + React")).toBeInTheDocument()
        const btn=screen.getByRole('button',{name:'count is 0'})
        fireEvent.click(btn)
        fireEvent.click(btn)
        expect(screen.getByRole('button',{name:'count is 2'})).toBeDefined()      
   })
   
})