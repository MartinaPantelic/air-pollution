import { useState } from 'react';

const VisibilityHandler = (component, visibility = false) => {
    const [visible, setVisible] = useState(() => visibility)
    return ([visible ? component : null, () => setVisible(v => !v)])
}

export default VisibilityHandler;