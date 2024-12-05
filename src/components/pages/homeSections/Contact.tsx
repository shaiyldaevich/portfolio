import React, { FC, useCallback, useState } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import scss from "./Contact.module.scss";
import { Montserrat } from "next/font/google";
import { useDropzone } from "react-dropzone";

const font = Montserrat({ subsets: ["latin"] });

interface FormData {
  name: string;
  email: string;
  number: string;
  message: string;
}

const ContactPage: FC<FormData> = () => {
  const [sendButton, setSendButton] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>({
    mode: "onChange",
  });

  const TOKEN = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;
  const CHAT_ID = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;
  const API_URL_SEND_MESSAGE = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

  const messageModel = (data: FormData) => {
    let messageTG = `Name: <b>${data.name}</b>\n`;
    messageTG += `Email: <b>${data.email}</b>\n`;
    messageTG += `Phone: <b>${data.number}</b>\n`;
    messageTG += `Message: <b>${data.message}</b>\n`;

    return messageTG;
  };

  const sendTextData = async (data: FormData) => {
    try {
      await axios.post(API_URL_SEND_MESSAGE, {
        chat_id: CHAT_ID,
        parse_mode: "html",
        text: messageModel(data),
      });
    } catch (err) {
      console.error("Ошибка при отправке сообщения", err);
    }
  };

  const sendData = async (data: FormData) => {
    setSendButton(true);

    await sendTextData(data);

    setTimeout(() => {
      setSendButton(false);
      notify();
      reset();
    }, 1000);
  };

  const notify = () => {
    toast.success("Ваша форма успешно отправлена!", {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const { getRootProps, getInputProps } = useDropzone({
    accept: {},
  });

  return (
    // <>
    <div
      id="contact"
      className={`${scss.text__z__index} ${scss.contact__page}`}
    >
      <div className="container">
        <div className={`${scss.content}`}>
          <div className={scss.form__title}></div>
          <div className={scss.form__content}>
            <form className={scss.form} onSubmit={handleSubmit(sendData)}>
              <div className={scss.form__group}>
                <input
                  className={scss.form__field}
                  type="text"
                  placeholder=""
                  {...register("name", { required: true, minLength: 2 })}
                />
                <label htmlFor="name" className={scss.form__label}>
                  Имя
                </label>
                {errors.name && (
                  <p className={scss.error}>Пожалуйста, введите ваше имя.</p>
                )}
              </div>

              <div className={scss.form__group}>
                <input
                  className={scss.form__field}
                  type="text"
                  placeholder=""
                  {...register("email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                />
                <label htmlFor="email" className={scss.form__label}>
                  Email
                </label>
                {errors.email && (
                  <p className={scss.error}>
                    Пожалуйста, введите корректный адрес электронной почты.
                  </p>
                )}
              </div>

              <div className={scss.form__group}>
                <input
                  className={scss.form__field}
                  type="text"
                  placeholder="Телефон"
                  {...register("number", { required: true, minLength: 2 })}
                />
                <label htmlFor="subject" className={scss.form__label}>
                  Тел номер
                </label>
                {errors.number && (
                  <p className={scss.error}>
                    Пожалуйста, введите ваш номер телефона.
                  </p>
                )}
              </div>

              <div className={scss.form__group}>
                <textarea
                  className={`${font.className} ${scss.form__field}`}
                  placeholder="Сообщение"
                  {...register("message")}
                />
                <label htmlFor="subject" className={scss.form__label}>
                  Сообщение
                </label>
              </div>

              <div className={scss.button__container}>
                {sendButton ? (
                  <button className={`${scss.button} ${scss.active}`}>
                    <span>Загрузка...</span>
                  </button>
                ) : (
                  <button type="submit" className={scss.button}>
                    <span>Отправить</span>
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>

    // </>
  );
};

export default ContactPage;
