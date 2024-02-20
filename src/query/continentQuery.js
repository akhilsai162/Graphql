export const continentsData = `
query {
    continents{
        name
        code
        countries{
            code
            name
            capital
            currency
            emoji
            phone
            languages {
                name
            }
        }
    }
}`

