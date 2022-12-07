import React from 'react'
import s from './index.module.css'
import { useForm } from 'react-hook-form'

export default function ContactsForm() {
  
  const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'onBlur' });

  const submit = (data) => console.log(data);
  

    const firstNameRegister = register('firstname', {
        required: '* Field "firstname" is required'    
    });
    const lastNameRegister = register('lastname', {
        required: '* Field "lastname" is required'
    });

    const messageRegister = register('message', {
      required: '* Field "message" is required'
  });
  
  
  return (
    <div>
      <form className={s.contacts_form} onSubmit={handleSubmit(submit)}>
        <div className={s.firstname_and_lastname}>
          <label>
            <p>Имя</p>
            <input 
            type='text' 
            name='firstname' 
            placeholder='Иван'  
            {...firstNameRegister}
          />
          </label>

          <label>
            <p>Фамилия</p>
            <input 
            type='text' 
            name='lastname' 
            placeholder='Иванов' 
            {...lastNameRegister} 
          />
          </label>
        </div>

        <label>
          <p>Сообщение</p>
          <textarea 
          type='text' 
          name='message' 
          placeholder='Ваше сообщение' 
          {...messageRegister}
        />
        </label>

        <button>Отправить сообщение</button>
      </form>

      <div className={s.error_message}>
        {errors.firstNameRegister && <p>{errors.firstNameRegister?.message}</p>}
        {errors.lastNameRegister && <p>{errors.lastNameRegister?.message}</p>}
        {errors.messageRegister && <p>{errors.messageRegister?.message}</p>}
      </div>
    </div>
  )
}