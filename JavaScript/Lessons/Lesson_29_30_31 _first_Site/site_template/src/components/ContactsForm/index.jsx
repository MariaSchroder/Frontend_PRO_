import React from 'react'
import s from './index.module.css'

export default function ContactsForm() {
  return (
    <form className={s.contacts_form}>
      <div className={s.firstname_and_lastname}>
        <label>
          <p>Имя</p>
          <input type='text' name='firstname' placeholder='Иван' />
        </label>

        <label>
          <p>Фамилия</p>
          <input type='text' name='lastname' placeholder='Иванов' />
        </label>
      </div>

      <label>
        <p>Сообщение</p>
        <textarea type='text' name='message' placeholder='Ваше сообщение' />
      </label>

      <button>Отправить сообщение</button>
    </form>
  )
}