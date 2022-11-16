import { VscGithub } from 'react-icons/vsc'

const Footer = () => {
	return (
		<footer className="flex items-center justify-center py-3">
			<a href="https://github.com/lteemu" target="_blank" aria-label="Github" rel="noreferrer" className="mr-2 hover:opacity-80">
				<VscGithub style={{ fontSize: '1.5rem' }} />
			</a>
			TL <span className="ml-1"> &copy; {new Date().getFullYear()}</span>
		</footer>
	)
}

export default Footer
