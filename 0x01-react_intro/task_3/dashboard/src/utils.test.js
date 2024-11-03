import { getFullYear, getFooterCopy, getLatestNotification } from './utils';

const date = new Date()
const year = date.getFullYear();

test('Correct Year: Not time bomb :)', () => { 
    expect(getFullYear()).toBe(year)
})

test('Right footer text for Index', () => {
    expect(getFooterCopy(true)).toBe("Holberton School")
})

test('Right footer text for Non-Index', () => {
    expect(getFooterCopy(false)).toBe("Holberton School main dashboard")
})

test('Latest Notification', () => {
    expect(getLatestNotification()).toBe("<strong>Urgent requirement</strong> - complete by EOD")
})