import './styles.scss'
 
import SigninModal from 'modules/auth/components/signin-modal/signin-modal.component'


function SigninPage() {

    return ( 
        <div className="signin-page">
          <SigninModal/>
        </div>
    )
}

export default SigninPage;