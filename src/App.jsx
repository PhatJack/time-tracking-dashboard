import React, { useEffect, useState } from 'react'
import Avatar from '../images/image-jeremy.png'
import Ellipsis from '../images/icon-ellipsis.svg'
import Exercise from '../images/icon-exercise.svg'
import Play from '../images/icon-play.svg'
import Study from '../images/icon-study.svg'
import Social from '../images/icon-social.svg'
import Work from '../images/icon-work.svg'
import SelfCare from '../images/icon-self-care.svg'
function App() {

	const [active, setActive] = useState('weekly')
	const svgImg = [Work, Play, Study, Exercise, Social, SelfCare]
	const [data, setData] = useState([])

	const getData = async () => {
		await fetch('http://localhost:5173/data.json')
			.then((res) => res.json())
			.then(data => {
				setData(data)
			})
	}
	useEffect(() => {
		getData()
	}, [])
	return (
		<>
			<div className="w-full h-full md:h-screen flex justify-center items-center bg-very-dark-blue md:p-0 p-5">
				<div className="max-w-[1143px] w-full min-h-[520px] md:h-fit grid justify-center grid-cols-1 grid-rows-[auto] md:grid-cols-custom-desktop md:grid-rows-custom-desktop gap-[1.875rem]">
					<div className="bg-dark-blue md:cols-[1_/_2] md:row-[1_/_-1] rounded-[1.15rem] relative">
						<div className="bg-blue  md:h-[350px] w-full flex  md:flex-col gap-10 p-8 rounded-[1.15rem]">
							<img src={Avatar} alt="" className='w-20 h-20 rounded-full border-2 border-white' />
							<article>
								<span className='text-pale-blue text-sm'>Report for</span>
								<h1 className='text-[2rem] leading-[3rem] text-white font-light'>Jeremy Robson</h1>
							</article>
						</div>
						<div className="w-full flex justify-between md:flex-col gap-3 p-8">
							<button type='button' onClick={() => { setActive("daily") }} className={`${active === "daily" ? "text-white" : "text-desatured-blue"} text-lg text-left font-light hover:text-white transition-colors w-fit first-letter:uppercase`}>Daily</button>
							<button type='button' onClick={() => { setActive("weekly") }} className={`${active === "weekly" ? "text-white" : "text-desatured-blue"} text-lg text-left font-light hover:text-white transition-colors w-fit first-letter:uppercase`}>Weekly</button>
							<button type='button' onClick={() => { setActive("monthly") }} className={`${active === "monthly" ? "text-white" : "text-desatured-blue"} text-lg text-left font-light hover:text-white transition-colors w-fit first-letter:uppercase`}>Monthly</button>
						</div>
					</div>
					{
						data.map((item, index) => (
							<div key={index}
								className={`${item.title.toLowerCase() === "work" ? "bg-work"
									: item.title.toLowerCase() === "study" ? "bg-study"
										: item.title.toLowerCase() === "social" ? "bg-social"
											: item.title.toLowerCase() === "exercise" ? "bg-exercise"
												: item.title.toLowerCase() === "self care" ? "bg-self-care" : "bg-play"} rounded-[1rem_1rem_1.25rem_1.25rem] relative w-full md:w-[255px] h-[244px] flex flex-col justify-end overflow-hidden`}>
								<img src={svgImg[index]} alt="" className='absolute -top-2 z-[2] right-5' />
								<section className='w-full h-[200px] bg-dark-blue rounded-2xl	 p-7
													flex flex-col hover:bg-desatured-blue transition-colors duration-300 z-10'>
									<div className="w-full flex justify-center items-center">
										<span className='w-full text-[1.15rem] text-white'>{item.title}</span>
										<i>
											<svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
												<path d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" fill="#BBC0FF" fill-rule="evenodd" />
											</svg>
										</i>
									</div>
									<article className='flex flex-row justify-between items-center md:items-start md:justify-start md:flex-col gap-2 mt-3 '>
										<h1 className='text-white font-light text-[3.25rem]'>{item.timeframes[active].current}hrs</h1>
										<p className='text-pale-blue text-sm'>Last Week - {item.timeframes.weekly.previous}hrs</p>
									</article>
								</section>
							</div>
						))
					}
				</div>
			</div>
		</>
	)
}

export default App
