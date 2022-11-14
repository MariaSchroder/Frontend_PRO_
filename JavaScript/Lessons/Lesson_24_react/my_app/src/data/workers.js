export const workers = [
    {
      id: 1,
      firstname: 'Ivan',
      lastname: 'Ivanov',
      position: 'CEO',
      in_office: false,
      avatar: './media/face_1.png',
      tasks: [
        {
          id: 1,
          task: 'Pick up document',
          done: false
        },
        {
          id: 2,
          task: 'Do homework',
          done: true
        },
        {
          id: 3,
          task: 'Go to workplace',
          done: false
        },
      ]
    },
    {
      id: 2,
      firstname: 'Olga',
      lastname: 'Petrova',
      position: 'Manager',
      in_office: true,
      tasks: []
    },
    {
      id: 3,
      firstname: 'Oleg',
      lastname: 'Sidorov',
      position: 'IT-manager',
      in_office: false,
      avatar: './media/face_3.png',
      tasks: []
    },
    {
      id: 4,
      firstname: 'Irina',
      lastname: 'Sokolova',
      position: 'Assistant',
      in_office: true,
      tasks: [
        {
          id: 1,
          task: 'Prepare for the meeting',
          done: false
        }
      ]
    }
  ]