import * as React from 'react'
import * as UI from '../../components/ui'

const Tick = <UI.Icon viewBox='0 0 342.357 342.357' className='tick' > <polygon points="290.04,33.286 118.861,204.427 52.32,137.907 0,190.226 118.862,309.071 342.357,85.606 " /></UI.Icon>

const Night = <UI.Icon viewBox='0 0 45.977 45.977' className='night' > <path d="M29.355,33.836c-7.691-0.977-13.836-7.248-14.674-14.957c-0.771-7.092,2.827-13.418,8.436-16.642
c1.09-0.626,0.639-2.296-0.617-2.236c-1.406,0.067-2.841,0.269-4.297,0.622C8.505,2.982,1.286,11.459,0.63,21.419
c-0.882,13.409,9.731,24.557,22.949,24.557c10.078,0,18.639-6.481,21.748-15.504c0.414-1.203-1.062-2.112-1.979-1.23
C39.804,32.644,34.792,34.526,29.355,33.836z"/></UI.Icon>

const BackArrow = <UI.Icon viewBox='0 0 408 408' className='back-arrow' >
  <path d="M408,178.5H96.9L239.7,35.7L204,0L0,204l204,204l35.7-35.7L96.9,229.5H408V178.5z"/>
</UI.Icon>

const RightArrow = <UI.Icon viewBox='0 0 444.819 444.819' className='right-arrow' >
  <path d="M352.025,196.712L165.884,10.848C159.029,3.615,150.469,0,140.187,0c-10.282,0-18.842,3.619-25.697,10.848L92.792,32.264
		c-7.044,7.043-10.566,15.604-10.566,25.692c0,9.897,3.521,18.56,10.566,25.981l138.753,138.473L92.786,361.168
		c-7.042,7.043-10.564,15.604-10.564,25.693c0,9.896,3.521,18.562,10.564,25.98l21.7,21.413
		c7.043,7.043,15.612,10.564,25.697,10.564c10.089,0,18.656-3.521,25.697-10.564l186.145-185.864
		c7.046-7.423,10.571-16.084,10.571-25.981C362.597,212.321,359.071,203.755,352.025,196.712z"/>
</UI.Icon>

const Morning = <UI.Icon viewBox='0 0 512 512' className='morning'>
  <g>
    <g>
      <path d="M378.795,368.439c3.544-11.882,5.385-24.296,5.385-36.744c0-70.679-57.501-128.18-128.18-128.18
        s-128.18,57.501-128.18,128.18c0,12.449,1.841,24.862,5.385,36.744H0v30h512v-30H378.795z"/>
    </g>
  </g>
  <g>
    <g>
      <rect x="241" y="113.561" width="30" height="60"/>
    </g>
    <g>
      <rect x="320.115" y="153.814" transform="matrix(0.5004 -0.8658 0.8658 0.5004 28.7601 387.4676)" width="60" height="30"/>
    </g>
    <g>
        <rect x="388.982" y="222.742" transform="matrix(0.8664 -0.4993 0.4993 0.8664 -62.7407 240.9592)" width="59.997" height="29.999"/>
    </g>
    <g>
      <rect x="429.128" y="301.899" transform="matrix(0.0012 -1 1 0.0012 111.6969 775.6281)" width="30" height="60"/>
    </g>
    <g>
        <rect x="146.002" y="138.797" transform="matrix(0.8658 -0.5003 0.5003 0.8658 -62.8524 103.1986)" width="29.999" height="59.997"/>
    </g>
    <g>
        <rect x="77.134" y="207.746" transform="matrix(0.4993 -0.8664 0.8664 0.4993 -159.8577 198.8621)" width="29.998" height="59.998"/>
    </g>
    <g>
      <rect x="37" y="316.92" transform="matrix(1 -0.0012 0.0012 1 -0.3984 0.0807)" width="60" height="30"/>
    </g>
  </g>
</UI.Icon>

const Day = <UI.Icon viewBox='0 0 45.16 45.16' className='day'>
  <g>
	<g>
		<path d="M22.58,11.269c-6.237,0-11.311,5.075-11.311,11.312s5.074,11.312,11.311,11.312c6.236,0,11.311-5.074,11.311-11.312
			S28.816,11.269,22.58,11.269z"/>
		<g>
			<g>
				<path d="M22.58,7.944c-1.219,0-2.207-0.988-2.207-2.206V2.207C20.373,0.988,21.361,0,22.58,0c1.219,0,2.207,0.988,2.207,2.207
					v3.531C24.787,6.956,23.798,7.944,22.58,7.944z"/>
			</g>
			<g>
				<path d="M22.58,37.215c-1.219,0-2.207,0.988-2.207,2.207v3.53c0,1.22,0.988,2.208,2.207,2.208c1.219,0,2.207-0.988,2.207-2.208
					v-3.53C24.787,38.203,23.798,37.215,22.58,37.215z"/>
			</g>
			<g>
				<path d="M32.928,12.231c-0.861-0.862-0.861-2.259,0-3.121l2.497-2.497c0.861-0.861,2.259-0.861,3.121,0
					c0.862,0.862,0.862,2.26,0,3.121l-2.497,2.497C35.188,13.093,33.791,13.093,32.928,12.231z"/>
			</g>
			<g>
				<path d="M12.231,32.93c-0.862-0.863-2.259-0.863-3.121,0l-2.497,2.496c-0.861,0.861-0.862,2.26,0,3.121
					c0.862,0.861,2.26,0.861,3.121,0l2.497-2.498C13.093,35.188,13.093,33.79,12.231,32.93z"/>
			</g>
			<g>
				<path d="M37.215,22.58c0-1.219,0.988-2.207,2.207-2.207h3.531c1.219,0,2.207,0.988,2.207,2.207c0,1.219-0.988,2.206-2.207,2.206
					h-3.531C38.203,24.786,37.215,23.799,37.215,22.58z"/>
			</g>
			<g>
				<path d="M7.944,22.58c0-1.219-0.988-2.207-2.207-2.207h-3.53C0.988,20.373,0,21.361,0,22.58c0,1.219,0.988,2.206,2.207,2.206
					h3.531C6.956,24.786,7.944,23.799,7.944,22.58z"/>
			</g>
			<g>
				<path d="M32.928,32.93c0.862-0.861,2.26-0.861,3.121,0l2.497,2.497c0.862,0.86,0.862,2.259,0,3.12s-2.259,0.861-3.121,0
					l-2.497-2.497C32.066,35.188,32.066,33.791,32.928,32.93z"/>
			</g>
			<g>
				<path d="M12.231,12.231c0.862-0.862,0.862-2.259,0-3.121L9.734,6.614c-0.862-0.862-2.259-0.862-3.121,0
					c-0.862,0.861-0.862,2.259,0,3.12l2.497,2.497C9.972,13.094,11.369,13.094,12.231,12.231z"/>
			</g>
		</g>
	</g>
</g>
</UI.Icon>

export {
  Tick,
  Morning,
  Day,
  Night,
  BackArrow,
  RightArrow
}