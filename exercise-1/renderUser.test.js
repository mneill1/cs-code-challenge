const renderUser = require('./renderUser');
const testObj = [{"id":"16","createdAt":"2021-03-31T13:24:14.020Z","name":"Ryann Wiegand","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/daykiine/128.jpg"}]
test('constructs context', () => {
    console.log(testObj[0])
    expect(renderUser(testObj[0])).toStrictEqual({ "id" : "16", "name": "Ryann Wiegand", "createdAt" : '2021-03-31T13:24:14.020Z', "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/daykiine/128.jpg"})
})
