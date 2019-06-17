window.addEventListener('load', function() {

    function on(number = 0) {

        //place of time-block class names for numbers
        const numbers = {
            0: ['top', 'top-right', 'top-left', 'bottom', 'bottom-right', 'bottom-left'],
            1: ['top-right', 'bottom-right'],
            2: ['top', 'top-right','middle', 'bottom', 'bottom-left'],
            3: ['top', 'top-right', 'middle', 'bottom', 'bottom-right'],
            4: ['top-right', 'top-left', 'middle', 'bottom-right'],
            5: ['top', 'top-left', 'middle', 'bottom', 'bottom-right'],
            6: ['top','top-left', 'middle', 'bottom', 'bottom-right', 'bottom-left'],
            7: ['top', 'top-right', 'bottom-right'],
            8: ['top', 'top-right', 'top-left', 'middle', 'bottom', 'bottom-right', 'bottom-left'],
            9: ['top', 'top-right', 'top-left', 'middle', 'bottom', 'bottom-right']
        }

        let timeBlocks = document.querySelectorAll('.time-block')
        
        for(let timeBlock of timeBlocks) {

            timeBlock.style.backgroundColor = 'white'

        }

        for(let timeBlockClass of numbers[number]) {

            document.querySelector('.' + timeBlockClass).style.backgroundColor = 'black'

        }

    }

    let countingNumber = 0

    setInterval(function() {
        
        on(countingNumber)

        countingNumber++

        if(countingNumber > 9) {

            countingNumber = 0

        }

    }, 1000)

})