import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import Logo from '../src/components/react/Logo'

storiesOf('Logo', module).add('Simple logo', () => <Logo />)
