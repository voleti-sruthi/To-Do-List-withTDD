import {screen,render} from '@testing-library/react'
import Users from '../users'
jest.mock('../../../__mocks__/axios')
it("should be able  to fetch and render the users", async ()=>{
    render(<Users/>)
    const userElement = await screen.findAllByTestId("user-id")
    screen.debug()
    expect(userElement.length).toBe(1);
})