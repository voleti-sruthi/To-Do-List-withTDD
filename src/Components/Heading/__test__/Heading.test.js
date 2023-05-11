import { render, screen } from '@testing-library/react';
import Heading from "../Heading"
it("Should have an input field",()=>{
    render(<Heading/>)
    const headingElement = screen.getByRole("heading",{name:"TO DO LIST"});
    expect(headingElement).toBeVisible();
})