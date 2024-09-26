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
    }, 
    // {
//         username: 'Vasya',
//         status: 'online',
//         lastActivity: 32
//     }
 ]

    const onlineUser = users.filter((user) => 
        user.status === 'online')

    const userOnlineNames = onlineUser.map(onlineNames => 
        onlineNames.username)

    console.log('onlineUser: ',onlineUser)
    console.log('userOnlineNames: ', userOnlineNames)

 alert(`Сейчас в онлайн следующие пользователи: ${userOnlineNames}`)
 


/*
Вам необходимо создать новый массив onlineUsers, 
который будет содержать объекты только тех пользователей, 
у которых status равен “online”. 
После выведите через alert сообщение 
“Сейчас в онлайн следующие пользователи: usersOnlineNames”, 
где usersOnlineNames - строка, 
в которой имена пользователей отображаются через запятую.
Для кода выше результат должен быть следующим: 
“Сейчас в онлайн следующие пользователи: David, Bob”.
*/