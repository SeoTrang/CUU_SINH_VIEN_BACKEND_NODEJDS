module.exports = {
    apps: [
        {
            name              : 'Trang Server',
            script            : './src/server.js',
            error_file        : './logs/logs/error.log',
            out_file          : './logs/logs/out.log',
            pid_file          : './logs/pid/app.pid',
            instance_var      : 'NODE_APP_INSTANCE',
            watch             :  ["src"],
            node_args         : ['--max_old_space_size=6000']
        }
    ]
}