"use client";
import { FC, useEffect, useState } from "react";
import scss from "./Contact.module.scss";
import axios from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface IformTelegram {
  username: string;
  email: string;
  subject: string;
  description: string;
}
const Contact: FC = () => {
  const [sendButton, setSendButton] = useState<boolean>(false);
  const [isTiltActive, setIsTiltActive] = useState<boolean>(true);

  useEffect(() => {
    if (window.innerWidth < 500) {
      setIsTiltActive(false);
    }
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IformTelegram>({
    mode: "onChange",
  });
  const Token = process.env.NEXT_PUBLIC_TELEGRAM_BOT_TOKEN;
  const ChatId = process.env.NEXT_PUBLIC_TELEGRAM_CHAT_ID;
  // console.log(Token);
  // console.log(ChatId);

  const messageModel = (data: IformTelegram) => {
    let messageTg = `Username:<b>${data.username}</b>\n `;
    messageTg += `Email Address:<b>${data.email}</b>\n `;
    messageTg += `Subject:<b>${data.subject}</b>\n `;
    messageTg += `Description:<b>${data.description}</b>\n `;
    return messageTg;
  };
  const onSubmit: SubmitHandler<IformTelegram> = async (data) => {
    reset();
    setSendButton(!sendButton);
    try {
      await axios.post(`https://api.telegram.org/bot${Token}/sendMessage`, {
        chat_id: ChatId,
        parse_mode: "html",
        text: messageModel(data),
      });

      setTimeout(() => {
        setSendButton(sendButton);
        notify();
        reset();
      }, 1000);
    } catch (err) {
      console.log(err);
    }
  };
  const notify = () =>
    toast.info("Send message is succesfull😎😎🤩👋😘", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  return (
    <section id="contact" className={scss.Contact}>
      <div className="container">
        <div className={scss.content}>
          <form className={scss.form} onSubmit={handleSubmit(onSubmit)}>
            <h1>Contact with me</h1>
            <input
              type="text"
              placeholder="username"
              {...register("username", { required: true })}
            />
            <input
              type="text"
              placeholder="email"
              {...register("email", { required: true })}
            />
            <input
              type="number"
              placeholder="phone number"
              {...register("subject", { required: true })}
            />
            <input
              type="text"
              placeholder="description"
              {...register("description", { required: true })}
            />
            <button type="submit">Submit</button>
          </form>

          <ToastContainer />
        </div>
      </div>
    </section>
  );
};

export default Contact;


// import scss from './Style.module.scss';
// import axios from 'axios';
// import { useForm } from 'react-hook-form';
// import { FormattedMessage, useIntl } from 'react-intl';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import Tilt from 'react-parallax-tilt';

// import { Montserrat } from 'next/font/google';
// import ReactPlayer from 'react-player';

// const font = Montserrat({ subsets: ['latin'] });

// interface FormData {
// 	name: string;
// 	email: string;
// 	subject: string;
// 	message: string;
// }

// const ContactPage: FC = () => {
// 	const [sendButton, setSendButton] = useState<boolean>(false);
// 	const [isTiltActive, setIsTiltActive] = useState<boolean>(true);

// 	useEffect(() => {
// 		if (window.innerWidth < 500) {
// 			setIsTiltActive(false);
// 		}
// 	}, []);

// 	const {
// 		register,
// 		handleSubmit,
// 		formState: { errors },
// 		reset
// 	} = useForm<FormData>({
// 		mode: 'onChange'
// 	});

// 	const TOKEN = process.env.NEXT_TELEGRAM_TOKEN!;
// 	const CHAT_ID = process.env.NEXT_TELEGRAM_CHAT_ID!;
// 	const API_URL = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

// 	const messageModel = (data: FormData) => {
// 		let messageTG = `Name: <b>${data.name}</b>\n`;
// 		messageTG += `Email: <b>${data.email}</b>\n`;
// 		messageTG += `Subject: <b>${data.subject}</b>\n`;
// 		messageTG += `Message: <b>${data.message}</b>\n`;

// 		return messageTG;
// 	};

// 	const sendData = async (data: FormData) => {
// 		setSendButton(!sendButton);

// 		try {
// 			await axios.post(API_URL, {
// 				chat_id: CHAT_ID,
// 				parse_mode: 'html',
// 				text: messageModel(data)
// 			});

// 			setTimeout(() => {
// 				setSendButton(sendButton);
// 				notify();
// 				reset();
// 			}, 1000);
// 		} catch (err) {
// 			console.log(err);
// 		}
// 	};

// 	const notify = () => {
// 		toast.success('Ваша форма успешно отправлена!', {
// 			position: 'top-right',
// 			autoClose: 3000,
// 			hideProgressBar: false,
// 			closeOnClick: true,
// 			pauseOnHover: true,
// 			draggable: true,
// 			progress: undefined,
// 			theme: 'dark'
// 		});
// 	};

// 	const intl: any = useIntl();

// 	return (
// 		<>
// 			<div
// 				id="contact"
// 				className={`${scss.text__z__index} ${scss.contact__page}`}
// 			>
// 				<div className="container">
// 					<div className={`${scss.content}`}>
// 						<div className={scss.form__title}>
// 							<h1>
// 								<FormattedMessage id="page.contact.title" />
// 							</h1>
// 							<h2>Let's work together📍</h2>
// 						</div>
// 						<div className={scss.form__content}>
// 							<Tilt
// 								className={scss.tilt}
// 								tiltEnable={isTiltActive}
// 								tiltMaxAngleX={30}
// 								tiltMaxAngleY={30}
// 								transitionSpeed={1500}
// 							>
// 								<div className={scss.animation__edge}>
// 									<ReactPlayer
// 										className={`${scss.text__z__index} ${scss.magic}`}
// 										url="/video.webm"
// 										playing={true}
// 										muted={true}
// 										loop={true}
// 										controls={false}
// 										width="100%"
// 										height="100%"
// 									/>
// 								</div>
// 							</Tilt>

// 							<Tilt
// 								className={scss.tilt}
// 								tiltEnable={isTiltActive}
// 								tiltMaxAngleX={3}
// 								tiltMaxAngleY={3}
// 							>
// 								<form className={scss.form} onSubmit={handleSubmit(sendData)}>
// 									<div className={scss.form__group}>
// 										<input
// 											className={scss.form__field}
// 											type="text"
// 											placeholder={intl.formatMessage({
// 												id: 'page.contact.input.name'
// 											})}
// 											{...register('name', { required: true, minLength: 2 })}
// 										/>
// 										<label htmlFor="name" className={scss.form__label}>
// 											<FormattedMessage id="page.contact.input.name" />
// 										</label>
// 										{errors.name && (
// 											<p className={scss.error}>
// 												Пожалуйста, введите ваше имя.
// 											</p>
// 										)}
// 									</div>

// 									<div className={scss.form__group}>
// 										<input
// 											className={scss.form__field}
// 											type="text"
// 											placeholder={intl.formatMessage({
// 												id: 'page.contact.input.email'
// 											})}
// 											{...register('email', {
// 												required: true,
// 												pattern: /^\S+@\S+$/i
// 											})}
// 										/>
// 										<label htmlFor="email" className={scss.form__label}>
// 											<FormattedMessage id="page.contact.input.email" />
// 										</label>
// 										{errors.email && (
// 											<p className={scss.error}>
// 												Пожалуйста, введите корректный адрес электронной почты.
// 											</p>
// 										)}
// 									</div>

// 									<div className={scss.form__group}>
// 										<input
// 											className={scss.form__field}
// 											type="text"
// 											placeholder={intl.formatMessage({
// 												id: 'page.contact.input.subject'
// 											})}
// 											{...register('subject', { required: true, minLength: 2 })}
// 										/>
// 										<label htmlFor="subject" className={scss.form__label}>
// 											<FormattedMessage id="page.contact.input.subject" />
// 										</label>
// 										{errors.subject && (
// 											<p className={scss.error}>
// 												Пожалуйста, введите тему сообщения.
// 											</p>
// 										)}
// 									</div>

// 									<div className={scss.form__group}>
// 										<textarea
// 											className={`${font.className} ${scss.form__field}`}
// 											placeholder={intl.formatMessage({
// 												id: 'page.contact.input.message'
// 											})}
// 											{...register('message')}
// 										/>
// 										<label htmlFor="subject" className={scss.form__label}>
// 											<FormattedMessage id="page.contact.input.message" />
// 										</label>
// 									</div>

// 									<div className={scss.button__container}>
// 										{sendButton ? (
// 											<button className={`${scss.button} ${scss.active}`}>
// 												<span>
// 													<FormattedMessage id="page.contact.sending" />
// 												</span>
// 											</button>
// 										) : (
// 											<button type="submit" className={scss.button}>
// 												<span>
// 													<FormattedMessage id="page.contact.send" />
// 												</span>
// 											</button>
// 										)}
// 									</div>
// 								</form>
// 							</Tilt>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 			<ToastContainer />
// 		</>
// 	);
// };

// export default ContactPage;
