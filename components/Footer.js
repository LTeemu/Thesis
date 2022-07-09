import { VscGithub } from 'react-icons/vsc'

const Footer = () => {
	return (
		<div className='flex items-center justify-center py-5 ml-6'>
			<a href="https://github.com/lteemu" target='_blank' className='mr-2'>
				<VscGithub size={25} />
			</a>
			TL <span className='ml-1'> &copy; {new Date().getFullYear()}</span>
		</div>
	)
}

export default Footer
