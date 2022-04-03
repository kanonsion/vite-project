export const toLine = (val: string) => {
    return val.replace(/[A-Z]/g, (s) => {
        return `-${s.toLocaleLowerCase()}`
    })
}
