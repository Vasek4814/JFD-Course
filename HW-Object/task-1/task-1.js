const users = [
    {
        username: 'David',
        status: 'online',
        lastActivity: 104
    }, {
        username: 'Lucy',
        status: 'offline',
        lastActivity: 104
    }, {
        username: 'Bob',
        status: 'online',
        lastActivity: 1
    }
 ]

    const onlineUser = users.filter((user) => 
        user.status === 'online')
    const userOnlineNames = ['David', 'Bob']

 alert(`Сейчас в онлайн следующие пользователи: ${userOnlineNames}`)
 
console.log('onlineUser: ',onlineUser)