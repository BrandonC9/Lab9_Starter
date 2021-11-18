
window.addEventListener('DOMContentLoaded', init);

function init() {
    document.getElementById('clog').addEventListener('click', function() {
        console.log('Console Log Demo');
    });

    document.getElementById('cerr').addEventListener('click', function() {
        console.error('Console error output');
    });

    document.getElementById('ccount').addEventListener('click', function() {
        console.count('count');
    });

    document.getElementById('cwarn').addEventListener('click', function() {
        console.warn('warn');
    });

    document.getElementById('cassert').addEventListener('click', function() {
        
    });

    document.getElementById('cclear').addEventListener('click', function() {
        console.clear();
    });

    document.getElementById('cdir').addEventListener('click', function() {
        console.dir(document.getElementById('cdir'));
    });

    document.getElementById('cdirxml').addEventListener('click', function() {
        console.dirxml(document);
    });

    document.getElementById('cgroupstart').addEventListener('click', function() {
        console.group('group');
    });

    document.getElementById('cgroupend').addEventListener('click', function() {
        console.groupEnd();
    });

    document.getElementById('ctable').addEventListener('click', function() {
        console.table([ 
            {
                first: 'John',
                last: 'Doe',
            },
            {
                first: 'Jane',
                last: 'Mary',
            },
            {
                first: 'Brandon',
                last: 'Chen',
            }
        ])
    });

    document.getElementById('starttimer').addEventListener('click', function() {
        console.time('Timer');
    });

    document.getElementById('endtimer').addEventListener('click', function() {
        console.timeEnd('Timer');
    });

    document.getElementById('ctrace').addEventListener('click', function() {
        first();
        console.trace();
    });

    document.getElementById('globalerr').addEventListener('click', function() {
        
    });

}