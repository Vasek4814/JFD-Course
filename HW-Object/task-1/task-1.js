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