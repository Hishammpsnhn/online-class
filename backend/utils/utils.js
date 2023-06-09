import jwt from 'jsonwebtoken';

//const activeTokens = {"hishammpsn@gmail.com":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NzBmNDk2MjliNzcxYTg1YTYwYjhhNiIsImlhdCI6MTY4NjMzNDUyMiwiZXhwIjoxNjg4OTI2NTIyfQ.XChnB_Mnaf3QcbQ4YwZ9whitXfj7AR2VVEqVz0PVHHo"};
const activeTokens = {};

export const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: '30d',
    })
}