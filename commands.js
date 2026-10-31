// All Things Linux: the command list, made from the Did You Know? Linux book.
// Each command is one { } block. name, icon, what it does, examples,
// dyk (Did You Know?), tags (careful / fossil / heads up).
var COMMANDS = [
{
"id": "cmd-bang",
"name": "!",
"icon": "🔄❌",
"what": "Flips a command's result. If the command fails, ! makes it count as a success, and the other way around. Not the same as !!.",
"examples": [
{
"label": "Example 1",
"code": "! grep -q \"error\" log.txt && echo \"No errors!\"",
"note": "Prints \"No errors!\" only if the word error is NOT in log.txt."
},
{
"label": "Example 2",
"code": "if ! ping -c 1 google.com; then echo \"You're offline\"; fi",
"note": "Says you're offline if the ping fails."
}
],
"dyk": "! needs a space after it. !grep means something totally different to bash, it digs through your history instead!"
},
{
"id": "cmd-bangbang",
"name": "!!",
"icon": "",
"what": "The double exclamation mark (!!) repeats the last command executed in the shell, providing a quick way to run it again.",
"examples": [
{
"label": "Example 1",
"code": "!!",
"note": "Executes the last command you ran."
},
{
"label": "Example 2",
"code": "# (after running a command)\n!! | grep \"search_term\"",
"note": "Runs the last command again and pipes its output to grep."
}
],
"dyk": "!! is like having a rewind button for your terminal commands, letting you quickly repeat what you just did!"
},
{
"id": "cmd-amp",
"name": "&",
"icon": "🌙🔀",
"what": "This command allows you to run a program in the background, so you can keep using the terminal for other tasks.",
"examples": [
{
"label": "Example 1",
"code": "gedit my_file.txt &",
"note": "Opens the text editor to edit my_file.txt, letting you keep using the terminal."
},
{
"label": "Example 2",
"code": "python my_script.py &",
"note": "Runs your Python script in the background, so you can still type other commands."
}
],
"dyk": "Using & can make you feel like a multitasking wizard, juggling several tasks at once!"
},
{
"id": "cmd-dparen",
"name": "(( ))",
"icon": "🧮⚡",
"what": "Does math on whole numbers right in the shell, no calculator needed.",
"examples": [
{
"label": "Example 1",
"code": "echo $(( 5 * 10 ))",
"note": "Prints 50."
},
{
"label": "Example 2",
"code": "count=0; (( count++ )); echo $count",
"note": "Adds 1 to count, then prints 1."
}
],
"dyk": "Inside (( )) you don't need the $ on variable names. (( count > 3 )) works just fine!",
"tags": [
[
"careful",
"Only whole numbers. $(( 10 / 3 )) gives 3, not 3.33. Use bc for decimals."
]
]
},
{
"id": "cmd-dot",
"name": ".",
"icon": "",
"what": "The dot (.) represents the current directory in Unix-like systems, often used for referencing paths.",
"examples": [
{
"label": "Example 1",
"code": "ls .",
"note": "Lists the contents of the current directory."
},
{
"label": "Example 2",
"code": "./my_script.sh",
"note": "Executes the script my_script.sh located in the current directory."
}
],
"dyk": "The dot is a handy shorthand for \"here,\" making navigation and commands quicker and easier!"
},
{
"id": "cmd-colon",
"name": ":",
"icon": "😶⚡",
"what": "The \"do nothing\" command. It does absolutely nothing and always succeeds. Weirdly useful.",
"examples": [
{
"label": "Example 1",
"code": "while :; do echo \"still here\"; sleep 5; done",
"note": "Loops forever, printing every 5 seconds. Press Ctrl + C to stop it."
},
{
"label": "Example 2",
"code": ": > my_file.txt",
"note": "Empties my_file.txt without deleting it."
}
],
"dyk": ": is the oldest way to write \"true\" in a shell. It's been around longer than the true command itself!",
"tags": [
[
"careful",
": > my_file.txt wipes the file's contents instantly, no undo."
]
]
},
{
"id": "cmd-bracket",
"name": "[ ]",
"icon": "🧪📦",
"what": "Tests if something is true, like \"does this file exist?\" or \"are these two the same?\" Same as the test command.",
"examples": [
{
"label": "Example 1",
"code": "[ -f my_file.txt ] && echo \"File exists\"",
"note": "Prints \"File exists\" if my_file.txt is there."
},
{
"label": "Example 2",
"code": "[ \"$answer\" = \"yes\" ] && echo \"Let's go!\"",
"note": "Prints \"Let's go!\" if the answer variable says yes."
}
],
"dyk": "[ is actually a command, and ] is its last argument. That's why the spaces matter! [-f file] breaks, [ -f file ] works."
},
{
"id": "cmd-dbracket",
"name": "[[ ]]",
"icon": "🧪✨",
"what": "The upgraded version of [ ]. Smarter, safer, and it understands patterns and && / || inside the brackets.",
"examples": [
{
"label": "Example 1",
"code": "[[ $name == Q* ]] && echo \"Starts with Q!\"",
"note": "Checks if the name starts with Q, like Queen."
},
{
"label": "Example 2",
"code": "[[ -f notes.txt && -r notes.txt ]] && echo \"Found it and can read it\"",
"note": "Checks two things at once: the file exists AND you can read it."
}
],
"dyk": "[[ ]] is bash only. If a script starts with #!/bin/sh, use the single [ ] instead."
},
{
"id": "cmd-brace",
"name": "{ }",
"icon": "🧺🔗",
"what": "Groups several commands together so they act like one, like sending all their output to the same file.",
"examples": [
{
"label": "Example 1",
"code": "{ echo \"one\"; echo \"two\"; } > both.txt",
"note": "Puts both lines into both.txt."
},
{
"label": "Example 2",
"code": "cd my_folder || { echo \"Folder not found\"; exit 1; }",
"note": "If cd fails, prints a message AND stops the script."
}
],
"dyk": "The spaces after { and the ; before } are required. {echo hi} won't work, but { echo hi; } will!"
},
{
"id": "cmd-ack",
"name": "ack",
"icon": "🔍⚡",
"what": "Ack is a search tool that helps you find text in files quickly, especially in programming projects.",
"examples": [
{
"label": "Example 1",
"code": "ack \"function_name\" .",
"note": "Searches for the term \"function_name\" in all files in the current directory."
},
{
"label": "Example 2",
"code": "ack --ignore-dir=tests \"bug\"",
"note": "Searches for \"bug\" but skips the \"tests\" directory."
}
],
"dyk": "Ack is like a supercharged version of grep, it's made just for searching code!"
},
{
"id": "cmd-alias",
"name": "alias",
"icon": "🏷️⚡",
"what": "This command lets you create shortcuts for other commands, making it easier to type.",
"examples": [
{
"label": "Example 1",
"code": "alias ll='ls -l'",
"note": "Now, typing ll will list files with details instead of having to type ls -l every time!"
},
{
"label": "Example 2",
"code": "alias update='sudo apt update && sudo apt upgrade'",
"note": "Quickly updates your system with just the word \"update\"."
}
],
"dyk": "You can have a whole dictionary of aliases, making your terminal life much easier!"
},
{
"id": "cmd-apropos",
"name": "apropos",
"icon": "🔍💡",
"what": "This command helps you find commands related to a specific keyword, kind of like a search engine for your terminal.",
"examples": [
{
"label": "Example 1",
"code": "apropos copy",
"note": "Lists all commands related to the word \"copy\"."
},
{
"label": "Example 2",
"code": "apropos network",
"note": "Shows commands associated with \"network\", helping you find what you need!"
}
],
"dyk": "Apropos can save you from a terminal treasure hunt when you're looking for commands!"
},
{
"id": "cmd-apt",
"name": "apt",
"icon": "📦⚡",
"what": "Apt is a package manager for installing, updating, and removing software on Debian-based systems like Ubuntu.",
"examples": [
{
"label": "Example 1",
"code": "apt install firefox",
"note": "Installs the Firefox web browser on your machine."
},
{
"label": "Example 2",
"code": "apt update",
"note": "Updates the list of available packages to ensure you have the latest info."
}
],
"dyk": "Apt is like your software shopping assistant, making sure you get the latest and greatest applications!"
},
{
"id": "cmd-at",
"name": "at",
"icon": "⏰📅",
"what": "The at command schedules a command to be run at a specific time in the future.",
"examples": [
{
"label": "Example 1",
"code": "echo \"backup.sh\" | at 2pm",
"note": "Sets the script backup.sh to run at 2 PM today."
},
{
"label": "Example 2",
"code": "at now + 1 minute",
"note": "Opens an interactive prompt to schedule a command to run one minute from now."
}
],
"dyk": "You can use at to set reminders, like your own little personal assistant in the terminal!"
},
{
"id": "cmd-awk",
"name": "awk",
"icon": "🔍📊",
"what": "Awk is a powerful programming language for pattern scanning and processing, mainly used for text files.",
"examples": [
{
"label": "Example 1",
"code": "awk '{print $1}' my_file.txt",
"note": "Prints the first column from my_file.txt, perfect for extracting specific information."
},
{
"label": "Example 2",
"code": "echo \"name age\" | awk '{print $2}'",
"note": "Outputs \"age\", showcasing how it can process input directly!"
}
],
"dyk": "Awk is named after its creators, Aho, Weinberger, and Kernighan, so it has some serious brainpower behind it!"
},
{
"id": "cmd-base32",
"name": "base32",
"icon": "🔢🔐",
"what": "Base32 converts binary data into a textual representation using 32 characters, making it easier to encode and transmit.",
"examples": [
{
"label": "Example 1",
"code": "echo \"Hello\" | base32",
"note": "Converts \"Hello\" into a base32 encoded string."
},
{
"label": "Example 2",
"code": "base32 -d <<< \"NBSWY3DP\"",
"note": "Decodes a base32 string back to its original form."
}
],
"dyk": "Base32 is handy for encoding data when you need to avoid special characters that might confuse other systems!"
},
{
"id": "cmd-base64",
"name": "base64",
"icon": "🔢🌐",
"what": "Base64 encodes binary data into a textual format using 64 characters, often used for email and data transfer.",
"examples": [
{
"label": "Example 1",
"code": "echo \"Hello\" | base64",
"note": "Converts \"Hello\" into a base64 encoded string."
},
{
"label": "Example 2",
"code": "base64 -d <<< \"SGVsbG8=\"",
"note": "Decodes a base64 string back to \"Hello\"."
}
],
"dyk": "Base64 is like a secret decoder ring for data, turning it into a format that's safe for sending over the internet!"
},
{
"id": "cmd-basename",
"name": "basename",
"icon": "📁✂️",
"what": "This command strips the directory and suffix from a file name, showing just the base name.",
"examples": [
{
"label": "Example 1",
"code": "basename /path/to/my_file.txt",
"note": "Returns \"my_file.txt\", making it easier to work with file names."
},
{
"label": "Example 2",
"code": "basename /path/to/my_file.txt .txt",
"note": "Returns \"my_file\", removing the .txt suffix as well."
}
],
"dyk": "Basename can help you clean up paths when you only want the file name without all the extra stuff!"
},
{
"id": "cmd-bash",
"name": "bash",
"icon": "🐚💻",
"what": "Bash is a command-line shell and scripting language in Linux, allowing you to interact with your system.",
"examples": [
{
"label": "Example 1",
"code": "bash script.sh",
"note": "Runs your script.sh file using the Bash shell."
},
{
"label": "Example 2",
"code": "bash",
"note": "Starts a new Bash session, giving you a fresh command line to work with!"
}
],
"dyk": "Bash stands for \"Bourne Again SHell,\" a play on words from the original Bourne shell, talk about a glow-up!"
},
{
"id": "cmd-bc",
"name": "bc",
"icon": "🧮⚡",
"what": "Bc is a calculator for the command line, allowing you to perform mathematical calculations.",
"examples": [
{
"label": "Example 1",
"code": "echo \"5 * 10\" | bc",
"note": "Multiplies 5 by 10 and gives you the result, 50."
},
{
"label": "Example 2",
"code": "bc <<< \"scale=2; 10/3\"",
"note": "Divides 10 by 3 and shows the result with two decimal places (3.33)."
}
],
"dyk": "Bc can handle complex calculations and even has support for arbitrary precision, perfect for math nerds!"
},
{
"id": "cmd-bg",
"name": "bg",
"icon": "🌙💻",
"what": "The bg command resumes a suspended job in the background, letting you continue using the terminal.",
"examples": [
{
"label": "Example 1",
"code": "bg %1",
"note": "Resumes the first suspended job in the background."
},
{
"label": "Example 2",
"code": "bg",
"note": "Resumes the most recently suspended job, making multitasking a breeze!"
}
],
"dyk": "With bg, you can juggle various tasks like a pro, just don’t forget what you’re running!"
},
{
"id": "cmd-bind",
"name": "bind",
"icon": "⌨️🔗",
"what": "The bind command allows you to set or display keyboard shortcuts for the Bash shell.",
"examples": [
{
"label": "Example 1",
"code": "bind '\"\\C-x\": \"exit\"'",
"note": "Sets Ctrl + X to exit the shell, customizing your keyboard shortcuts."
},
{
"label": "Example 2",
"code": "bind -p",
"note": "Displays all current key bindings, giving you an overview of your shortcuts."
}
],
"dyk": "Customizing your key bindings can make your terminal experience faster and more efficient, just like a keyboard ninja!"
},
{
"id": "cmd-break",
"name": "break",
"icon": "🛑⚡",
"what": "The break command is used in loops to stop the execution of the loop when a certain condition is met.",
"examples": [
{
"label": "Example 1",
"code": "for i in {1..5}; do echo $i; break; done",
"note": "This will print \"1\" and then stop the loop immediately."
},
{
"label": "Example 2",
"code": "while true; do echo \"Still running\"; break; done",
"note": "This will print \"Still running\" and then exit the loop right away."
}
],
"dyk": "Using break can turn your endless loops into quick exits, like a secret escape route!"
},
{
"id": "cmd-builtin",
"name": "builtin",
"icon": "🏗️⚡",
"what": "This command shows you a list of shell built-in commands, which are commands built directly into the shell.",
"examples": [
{
"label": "Example 1",
"code": "builtin",
"note": "Displays all the built-in commands available in your shell."
},
{
"label": "Example 2",
"code": "builtin cd my_directory",
"note": "Changes to \"my_directory\" using the built-in cd command."
}
],
"dyk": "Built-in commands are like your shell’s superpowers, they’re faster because they don’t need to call external programs!"
},
{
"id": "cmd-bzip2",
"name": "bzip2",
"icon": "🗜️📦",
"what": "This command compresses files to save space, making them smaller and easier to store or transfer.",
"examples": [
{
"label": "Example 1",
"code": "bzip2 my_file.txt",
"note": "Compresses \"my_file.txt\" into \"my_file.txt.bz2\"."
},
{
"label": "Example 2",
"code": "bzip2 -d my_file.txt.bz2",
"note": "Decompresses \"my_file.txt.bz2\" back to its original form."
}
],
"dyk": "Bzip2 is like putting your files on a diet, smaller size, same great content!"
},
{
"id": "cmd-cal",
"name": "cal",
"icon": "📅⚡",
"what": "This command displays a calendar for the current month or any month you specify.",
"examples": [
{
"label": "Example 1",
"code": "cal",
"note": "Shows the calendar for the current month."
},
{
"label": "Example 2",
"code": "cal 2023",
"note": "Displays the calendar for the entire year of 2023."
}
],
"dyk": "With cal, you can always know when your next deadline is, just don't blame me if you realize it's tomorrow! 😅"
},
{
"id": "cmd-caller",
"name": "caller",
"icon": "🕵️‍♂️📞",
"what": "This command is used in shell scripts to show the current function or line number that called the function.",
"examples": [
{
"label": "Example 1",
"code": "caller",
"note": "Displays the line number of the current function call if you're inside a function."
},
{
"label": "Example 2",
"code": "function my_func() { caller; }; my_func",
"note": "Calls the function and shows the line number where my_func was called."
}
],
"dyk": "Caller can be your detective buddy, helping you track where functions come from in your scripts!"
},
{
"id": "cmd-case",
"name": "case",
"icon": "🎯🔀",
"what": "The case command allows you to execute different commands based on a variable's value, similar to a switch statement in other programming languages.",
"examples": [
{
"label": "Example 1",
"code": "case $day in\n  Monday) echo \"Start of the week!\";;\n  Friday) echo \"Almost the weekend!\";;\n  *) echo \"Just another day!\";;\nesac",
"note": "Responds differently based on the value of the variable $day."
},
{
"label": "Example 2",
"code": "case $color in\n  red) echo \"Roses are red!\";;\n  blue) echo \"The sky is blue!\";;\n  *) echo \"Color unknown!\";;\nesac",
"note": "Gives a response based on the chosen color."
}
],
"dyk": "The case command can help you make decisions like a boss, perfect for scripting your own logic!"
},
{
"id": "cmd-cat",
"name": "cat",
"icon": "🐱📄",
"what": "The cat command is used to display the contents of a file or concatenate multiple files together.",
"examples": [
{
"label": "Example 1",
"code": "cat my_file.txt",
"note": "Displays the contents of my_file.txt right in the terminal."
},
{
"label": "Example 2",
"code": "cat file1.txt file2.txt > combined.txt",
"note": "Combines file1.txt and file2.txt into a new file called combined.txt."
}
],
"dyk": "Cat is like a magical window into your files, perfect for quick peeks without opening an editor!"
},
{
"id": "cmd-cd",
"name": "cd",
"icon": "🚪📁",
"what": "The cd command changes your current working directory in the terminal.",
"examples": [
{
"label": "Example 1",
"code": "cd Documents",
"note": "Moves you into the Documents directory."
},
{
"label": "Example 2",
"code": "cd ..",
"note": "Takes you one level up to the parent directory."
}
],
"dyk": "With cd, you can navigate your file system like a pro, just don’t get lost in the folders!"
},
{
"id": "cmd-cfdisk",
"name": "cfdisk",
"icon": "💽🔧",
"what": "This command is a command-line tool for creating and modifying disk partitions interactively.",
"examples": [
{
"label": "Example 1",
"code": "cfdisk /dev/sda",
"note": "Opens the cfdisk utility for the first hard drive, allowing you to manage partitions."
},
{
"label": "Example 2",
"code": "cfdisk",
"note": "Opens the cfdisk utility for the default drive, letting you explore partitions."
}
],
"dyk": "Cfdisk is like a digital map for your hard drive, just be careful not to erase anything important!",
"tags": [
[
"careful",
"Changing partitions can wipe data. Back up first, and make sure you picked the right disk."
]
]
},
{
"id": "cmd-chattr",
"name": "chattr",
"icon": "🏷️🔒",
"what": "The chattr command changes file attributes on a Linux file system, allowing you to set specific properties.",
"examples": [
{
"label": "Example 1",
"code": "chattr +i my_file.txt",
"note": "Makes my_file.txt immutable, meaning it can’t be modified or deleted."
},
{
"label": "Example 2",
"code": "chattr -i my_file.txt",
"note": "Removes the immutable attribute, allowing changes to my_file.txt again."
}
],
"dyk": "Chattr can be your file’s bodyguard, protecting it from accidental changes!"
},
{
"id": "cmd-chgrp",
"name": "chgrp",
"icon": "👥🔄",
"what": "This command changes the group ownership of a file or directory.",
"examples": [
{
"label": "Example 1",
"code": "chgrp developers my_file.txt",
"note": "Changes the group ownership of my_file.txt to \"developers\"."
},
{
"label": "Example 2",
"code": "chgrp -R users /my_directory",
"note": "Recursively changes the group of all files in /my_directory to \"users\"."
}
],
"dyk": "Chgrp helps you share files with the right crew, no more gate-crashing your file parties!"
},
{
"id": "cmd-chkconfig",
"name": "chkconfig",
"icon": "⚙️🚀",
"what": "This command manages the system services that start automatically at boot time.",
"examples": [
{
"label": "Example 1",
"code": "chkconfig --list",
"note": "Displays a list of all services and their run levels."
},
{
"label": "Example 2",
"code": "chkconfig httpd on",
"note": "Enables the Apache web server to start at boot."
}
],
"dyk": "Chkconfig is like your startup manager, deciding what programs get to crash your boot party!",
"tags": [
[
"fossil",
"Old-timer. Modern systems use systemctl instead."
]
]
},
{
"id": "cmd-chmod",
"name": "chmod",
"icon": "🔐⚙️",
"what": "The chmod command changes the permissions of a file or directory, controlling who can read, write, or execute it.",
"examples": [
{
"label": "Example 1",
"code": "chmod 755 my_script.sh",
"note": "Sets permissions so the owner can read, write, and execute, while others can read and execute."
},
{
"label": "Example 2",
"code": "chmod +x my_file.txt",
"note": "Adds execute permission to my_file.txt, allowing it to be run as a program."
}
],
"dyk": "Chmod is like your file’s bouncer, deciding who gets in and what they can do!",
"tags": [
[
"careful",
"Never run chmod -R 777 on system folders. It opens everything to everyone and can break your system."
]
]
},
{
"id": "cmd-chown",
"name": "chown",
"icon": "👑📄",
"what": "This command changes the ownership of a file or directory, allowing you to assign it to a different user.",
"examples": [
{
"label": "Example 1",
"code": "chown alice my_file.txt",
"note": "Changes the ownership of my_file.txt to the user \"alice\"."
},
{
"label": "Example 2",
"code": "chown -R bob:users /my_directory",
"note": "Recursively changes the owner to \"bob\" and the group to \"users\" for all files in /my_directory."
}
],
"dyk": "Chown is like passing the keys to your files, just make sure you trust the new owner!",
"tags": [
[
"careful",
"Changing ownership of system files with -R can lock you out of your own machine."
]
]
},
{
"id": "cmd-chpasswd",
"name": "chpasswd",
"icon": "🔐🔄",
"what": "The chpasswd command updates user passwords in bulk by reading from standard input.",
"examples": [
{
"label": "Example 1",
"code": "echo \"user1:password123\" | chpasswd",
"note": "Changes the password for user1 to \"password123\"."
},
{
"label": "Example 2",
"code": "echo -e \"user2:pass456\\nuser3:pass789\" | chpasswd",
"note": "Changes the passwords for user2 and user3 in one go!"
}
],
"dyk": "Chpasswd is like a password manager, but for the command line, just remember not to shout your passwords in public! 😅",
"tags": [
[
"careful",
"This changes passwords in bulk. One typo and someone is locked out."
]
]
},
{
"id": "cmd-chroot",
"name": "chroot",
"icon": "🏠🔒",
"what": "This command changes the root directory for the current running process and its children, creating a mini-filesystem environment.",
"examples": [
{
"label": "Example 1",
"code": "chroot /new_root /bin/bash",
"note": "Starts a new bash shell with /new_root as the new root directory."
},
{
"label": "Example 2",
"code": "chroot /my_env",
"note": "Changes the root to /my_env, isolating the process from the rest of the file system."
}
],
"dyk": "Chroot can create a safe haven for programs, like a cozy little bubble away from the rest of the system!",
"tags": [
[
"careful",
"Advanced tool. Easy to get lost in, so know how to exit before you go in."
]
]
},
{
"id": "cmd-cksum",
"name": "cksum",
"icon": "🔍📊",
"what": "The cksum command computes and displays the CRC checksum and byte count for a file, useful for data integrity checks.",
"examples": [
{
"label": "Example 1",
"code": "cksum my_file.txt",
"note": "Displays the checksum and byte count for my_file.txt."
},
{
"label": "Example 2",
"code": "cksum file1.txt file2.txt",
"note": "Shows the checksums for both file1.txt and file2.txt, making it easy to compare!"
}
],
"dyk": "Cksum is like a fingerprint for your files, keeping track of their unique identity!"
},
{
"id": "cmd-clear",
"name": "clear",
"icon": "🧹✨",
"what": "This command clears the terminal screen, giving you a fresh workspace.",
"examples": [
{
"label": "Example 1",
"code": "clear",
"note": "Empties the terminal screen so you can start anew."
},
{
"label": "Example 2",
"code": "echo \"Hello, World!\" && clear",
"note": "Prints \"Hello, World!\" and then clears the screen right after."
}
],
"dyk": "Using clear can make your terminal look as neat as your desk after a spring cleaning spree!"
},
{
"id": "cmd-cmp",
"name": "cmp",
"icon": "🔍🕵️‍♂️",
"what": "The cmp command compares two files byte by byte and tells you if they are different, and where.",
"examples": [
{
"label": "Example 1",
"code": "cmp file1.txt file2.txt",
"note": "Compares file1.txt and file2.txt, letting you know if they match or where they differ."
},
{
"label": "Example 2",
"code": "cmp -l file1.txt file2.txt",
"note": "Outputs the differing bytes in a more detailed format."
}
],
"dyk": "Cmp is like having a super detective for your files, revealing where the sneaky differences are hiding!"
},
{
"id": "cmd-comm",
"name": "comm",
"icon": "🔍📊",
"what": "The comm command compares two sorted files line by line and outputs the differences.",
"examples": [
{
"label": "Example 1",
"code": "comm file1.txt file2.txt",
"note": "Shows three columns: lines unique to file1, lines unique to file2, and lines common to both."
},
{
"label": "Example 2",
"code": "comm -13 file1.txt file2.txt",
"note": "Displays only the lines unique to file2, hiding the common lines and those from file1."
}
],
"dyk": "Comm is like a referee for text files, helping you settle the score on what’s different!"
},
{
"id": "cmd-command",
"name": "command",
"icon": "🎯💻",
"what": "The command command runs a specified command, bypassing any shell functions or aliases with the same name.",
"examples": [
{
"label": "Example 1",
"code": "command ls",
"note": "Runs the actual ls command, ignoring any alias or function named ls."
},
{
"label": "Example 2",
"code": "command -v echo",
"note": "Displays the path of the original echo command, giving you a sneak peek behind the scenes!"
}
],
"dyk": "Using command can help you avoid confusion when you have aliases that might get in the way, like a command superhero!"
},
{
"id": "cmd-compgen",
"name": "compgen",
"icon": "🔎⌨️",
"what": "Lists what tab-completion could fill in: commands, aliases, builtins, and more.",
"examples": [
{
"label": "Example 1",
"code": "compgen -c | grep ^git",
"note": "Lists every command that starts with \"git\"."
},
{
"label": "Example 2",
"code": "compgen -b",
"note": "Lists every bash builtin command."
}
],
"dyk": "compgen -c is a sneaky way to see every single command your system can run!"
},
{
"id": "cmd-complete",
"name": "complete",
"icon": "🎯⌨️",
"what": "Sets up custom tab-completion for a command, so pressing Tab suggests the words you choose.",
"examples": [
{
"label": "Example 1",
"code": "complete -W \"start stop restart\" myservice",
"note": "Now typing myservice  and pressing Tab suggests start, stop, or restart."
},
{
"label": "Example 2",
"code": "complete -p",
"note": "Shows all the tab-completion rules you have set up."
}
],
"dyk": "This is how git, apt, and pkg know what to suggest when you press Tab!"
},
{
"id": "cmd-compopt",
"name": "compopt",
"icon": "⚙️⌨️",
"what": "Tweaks how tab-completion behaves for a command, like whether it adds a space after.",
"examples": [
{
"label": "Example 1",
"code": "compopt -o nospace myservice",
"note": "Stops Tab from adding a space after completing for myservice."
},
{
"label": "Example 2",
"code": "compopt -o filenames myservice",
"note": "Treats completions like file names, adding a / after folders."
}
],
"dyk": "Most people never type compopt themselves. It mostly lives inside completion scripts that other people wrote."
},
{
"id": "cmd-continue",
"name": "continue",
"icon": "⏭️🔄",
"what": "The continue command resumes the next iteration of a loop, skipping the rest of the current iteration.",
"examples": [
{
"label": "Example 1",
"code": "for i in {1..5}; do\n  if [ $i -eq 3 ]; then continue; fi\n  echo $i\ndone",
"note": "Prints 1, 2, 4, and 5, skipping 3 entirely!"
},
{
"label": "Example 2",
"code": "while read line; do\n  if [[ $line == \"\" ]]; then continue; fi\n  echo $line\ndone < my_file.txt",
"note": "Prints all non-empty lines from my_file.txt, skipping any blank lines."
}
],
"dyk": "Continue acts like a fast-forward button in loops, letting you skip over stuff you don’t want to deal with!"
},
{
"id": "cmd-coproc",
"name": "coproc",
"icon": "🤝🔄",
"what": "Runs a command in the background that your script can talk back and forth with, like a little helper on the side.",
"examples": [
{
"label": "Example 1",
"code": "coproc bc\necho \"2+2\" >&\"${COPROC[1]}\"\nread answer <&\"${COPROC[0]}\"\necho $answer",
"note": "Sends 2+2 to the calculator in the background and reads back 4."
},
{
"label": "Example 2",
"code": "coproc MYCALC { bc; }",
"note": "Same thing, but names the helper MYCALC instead of COPROC."
}
],
"dyk": "COPROC[1] is how you talk TO the helper and COPROC[0] is how you hear back FROM it."
},
{
"id": "cmd-cp",
"name": "cp",
"icon": "📋📄",
"what": "The cp command copies files or directories from one location to another.",
"examples": [
{
"label": "Example 1",
"code": "cp my_file.txt backup.txt",
"note": "Creates a copy of my_file.txt called backup.txt."
},
{
"label": "Example 2",
"code": "cp -r my_directory/ backup_directory/",
"note": "Copies the entire my_directory to backup_directory, keeping all its contents!"
}
],
"dyk": "Cp is like a cloning machine for your files, just make sure you don’t clone too many!",
"tags": [
[
"careful",
"cp overwrites a file with the same name without asking. Use cp -i if you want it to check first."
]
]
},
{
"id": "cmd-cpio",
"name": "cpio",
"icon": "📦⏰",
"what": "Cpio is a utility for copying files to and from archives, often used for backups.",
"examples": [
{
"label": "Example 1",
"code": "find . | cpio -o > archive.cpio",
"note": "Creates an archive called archive.cpio containing all files in the current directory."
},
{
"label": "Example 2",
"code": "cpio -i < archive.cpio",
"note": "Extracts files from archive.cpio back to the current directory."
}
],
"dyk": "Cpio is like a time capsule for your files, letting you store and retrieve them later!"
},
{
"id": "cmd-cron",
"name": "cron",
"icon": "⏰🤖",
"what": "Cron is a time-based job scheduler that runs scripts or commands at specified intervals.",
"examples": [
{
"label": "Example 1",
"code": "crontab -e",
"note": "Opens the cron table for editing, where you can schedule tasks."
},
{
"label": "Example 2",
"code": "* * * * * /path/to/script.sh",
"note": "Runs the script.sh every minute, just be careful not to overload your system!"
}
],
"dyk": "Cron is like having a personal assistant who runs tasks for you while you sleep, so you can wake up to a job well done!"
},
{
"id": "cmd-crontab",
"name": "crontab",
"icon": "⏰📅",
"what": "Crontab manages the cron jobs for scheduling tasks to run automatically at specified times.",
"examples": [
{
"label": "Example 1",
"code": "crontab -l",
"note": "Lists all scheduled cron jobs for the current user."
},
{
"label": "Example 2",
"code": "crontab -e",
"note": "Opens the crontab file for editing, allowing you to add or modify scheduled tasks."
}
],
"dyk": "Crontab is like setting appointments for your scripts, never forget to run that backup again!",
"tags": [
[
"careful",
"crontab -r deletes all your scheduled jobs with no warning. It sits right next to -e on the keyboard."
]
]
},
{
"id": "cmd-csplit",
"name": "csplit",
"icon": "✂️📄",
"what": "The csplit command splits a file into smaller pieces based on context or size.",
"examples": [
{
"label": "Example 1",
"code": "csplit my_file.txt 100",
"note": "Splits my_file.txt into chunks of 100 lines each."
},
{
"label": "Example 2",
"code": "csplit my_file.txt /pattern/ {*}",
"note": "Splits my_file.txt at each occurrence of \"pattern\", creating separate files."
}
],
"dyk": "Csplit is like a file cutting tool, perfect for breaking big texts into bite-sized pieces!"
},
{
"id": "cmd-curl",
"name": "curl",
"icon": "🌐📡",
"what": "Curl is a command-line tool used to transfer data to or from a server using various protocols like HTTP, FTP, and more.",
"examples": [
{
"label": "Example 1",
"code": "curl https://example.com",
"note": "Fetches the content of the webpage from example.com and displays it in the terminal."
},
{
"label": "Example 2",
"code": "curl -O https://example.com/file.zip",
"note": "Downloads the file.zip from example.com to your current directory."
}
],
"dyk": "Curl can be your go-to tool for web scraping, just don’t forget to respect the website’s rules!"
},
{
"id": "cmd-cut",
"name": "cut",
"icon": "✂️📊",
"what": "The cut command extracts sections from each line of a file or input, allowing you to grab specific fields.",
"examples": [
{
"label": "Example 1",
"code": "cut -d',' -f1 my_file.csv",
"note": "Extracts the first field from each line of my_file.csv, using a comma as the delimiter."
},
{
"label": "Example 2",
"code": "echo \"one two three\" | cut -d' ' -f2",
"note": "Outputs \"two\", grabbing the second word from a string!"
}
],
"dyk": "Cut is like a pair of scissors for your text, snipping out just the parts you need!"
},
{
"id": "cmd-date",
"name": "date",
"icon": "📅⏰",
"what": "The date command displays the current date and time, and can also format it in various ways.",
"examples": [
{
"label": "Example 1",
"code": "date",
"note": "Shows the current date and time in the default format."
},
{
"label": "Example 2",
"code": "date \"+%Y-%m-%d\"",
"note": "Displays the date in the format YYYY-MM-DD, which is super handy for logging!"
}
],
"dyk": "The date command can help you impress your friends with your time-telling skills, even in different formats!"
},
{
"id": "cmd-dc",
"name": "dc",
"icon": "🧮⚡",
"what": "Dc is a reverse-polish desk calculator that allows for complex calculations using a stack-based approach.",
"examples": [
{
"label": "Example 1",
"code": "echo \"5 2 + p\" | dc",
"note": "Adds 5 and 2, then prints the result (7)."
},
{
"label": "Example 2",
"code": "dc <<< \"3 4 * 10 + p\"",
"note": "Multiplies 3 by 4, adds 10, and prints the result (22)."
}
],
"dyk": "Dc is like having a tiny calculator in your terminal, perfect for when you need to do math on the fly!"
},
{
"id": "cmd-dd",
"name": "dd",
"icon": "💾🔄",
"what": "The dd command is used for converting and copying files, often used for creating disk images or backups.",
"examples": [
{
"label": "Example 1",
"code": "dd if=/dev/sda of=backup.img",
"note": "Creates a disk image of your hard drive and saves it as backup.img."
},
{
"label": "Example 2",
"code": "dd if=my_file.img of=/dev/sdb bs=4M",
"note": "Writes my_file.img to a USB drive at /dev/sdb, using a block size of 4 megabytes."
}
],
"dyk": "Dd can be a lifesaver for backups, but be careful, it can also wipe data if used incorrectly!",
"tags": [
[
"careful",
"dd will overwrite whatever you point it at, even your main drive. Triple-check the of= part."
]
]
},
{
"id": "cmd-ddrescue",
"name": "ddrescue",
"icon": "🦸‍♂️💾",
"what": "Ddrescue is a data recovery tool that attempts to copy data from a damaged or failing storage device while skipping over unreadable sections.",
"examples": [
{
"label": "Example 1",
"code": "ddrescue /dev/sda /dev/sdb rescue.log",
"note": "Attempts to copy all readable data from /dev/sda to /dev/sdb, logging any errors in rescue.log."
},
{
"label": "Example 2",
"code": "ddrescue -f -n /dev/sdc image.img image.log",
"note": "Forces a copy of data from /dev/sdc to image.img without trying to retry bad sectors."
}
],
"dyk": "Ddrescue is like your data superhero, swooping in to save your files from disaster!"
},
{
"id": "cmd-declare",
"name": "declare",
"icon": "📝🎯",
"what": "The declare command is used in Bash scripts to define variables and their attributes, such as types and read-only status.",
"examples": [
{
"label": "Example 1",
"code": "declare -i num=10",
"note": "Declares num as an integer variable."
},
{
"label": "Example 2",
"code": "declare -r my_var=\"Read Only\"",
"note": "Creates a read-only variable, meaning its value can't be changed later."
}
],
"dyk": "Using declare can help you keep your variables in check, like a personal assistant for your scripts!"
},
{
"id": "cmd-df",
"name": "df",
"icon": "💾📊",
"what": "The df command displays information about disk space usage for all mounted filesystems.",
"examples": [
{
"label": "Example 1",
"code": "df",
"note": "Shows the disk space usage for all mounted filesystems in a human-readable format."
},
{
"label": "Example 2",
"code": "df -h",
"note": "Displays the same info but with sizes in a more friendly format (e.g., GB, MB)."
}
],
"dyk": "Df helps you keep tabs on your disk space, like a financial advisor for your storage!"
},
{
"id": "cmd-diff",
"name": "diff",
"icon": "🔍📄",
"what": "The diff command compares two files line by line and shows the differences between them.",
"examples": [
{
"label": "Example 1",
"code": "diff file1.txt file2.txt",
"note": "Displays the differences between file1.txt and file2.txt."
},
{
"label": "Example 2",
"code": "diff -u file1.txt file2.txt",
"note": "Shows a unified diff format, making it easier to read the differences."
}
],
"dyk": "Diff is like a detective for text files, uncovering what’s changed between versions!"
},
{
"id": "cmd-diff3",
"name": "diff3",
"icon": "🔍📄📄📄",
"what": "Diff3 compares three files and shows the differences, which is helpful for merging changes from multiple sources.",
"examples": [
{
"label": "Example 1",
"code": "diff3 file1.txt file2.txt file3.txt",
"note": "Displays the differences between the three files, highlighting where they differ."
},
{
"label": "Example 2",
"code": "diff3 -m file1.txt file2.txt file3.txt",
"note": "Merges the changes from the three files into one output, combining them where possible."
}
],
"dyk": "Diff3 is like having a mediator for file comparisons, helping you merge different versions together!"
},
{
"id": "cmd-dig",
"name": "dig",
"icon": "🔍🌐",
"what": "The dig command queries DNS servers to retrieve information about domain names, such as IP addresses.",
"examples": [
{
"label": "Example 1",
"code": "dig example.com",
"note": "Fetches the DNS records for example.com, showing its IP address and other details."
},
{
"label": "Example 2",
"code": "dig +short google.com",
"note": "Displays only the IP address of google.com in a simplified format."
}
],
"dyk": "Dig is like a detective for the internet, helping you track down information about websites!"
},
{
"id": "cmd-dir",
"name": "dir",
"icon": "📁👀",
"what": "The dir command lists the contents of a directory, similar to the ls command, but often with a different format.",
"examples": [
{
"label": "Example 1",
"code": "dir",
"note": "Displays the files and folders in the current directory."
},
{
"label": "Example 2",
"code": "dir /path/to/directory",
"note": "Lists the contents of the specified directory."
}
],
"dyk": "Dir is like your directory tour guide, showing you what’s inside without needing a map!"
},
{
"id": "cmd-dircolors",
"name": "dircolors",
"icon": "🎨🌈",
"what": "The dircolors command sets color codes for the output of the ls command, making it easier to distinguish file types in the terminal.",
"examples": [
{
"label": "Example 1",
"code": "dircolors",
"note": "Displays the current color settings for your terminal."
},
{
"label": "Example 2",
"code": "dircolors ~/.dircolors",
"note": "Loads custom color settings from the .dircolors file in your home directory."
}
],
"dyk": "Dircolors can turn your terminal into a colorful masterpiece, helping you spot files faster, like art for your command line!"
},
{
"id": "cmd-dirname",
"name": "dirname",
"icon": "📁✂️",
"what": "The dirname command extracts the directory path from a given file path, removing the file name.",
"examples": [
{
"label": "Example 1",
"code": "dirname /path/to/my_file.txt",
"note": "Returns \"/path/to\", which is the directory of my_file.txt."
},
{
"label": "Example 2",
"code": "dirname /home/user/Documents/report.pdf",
"note": "Outputs \"/home/user/Documents\", giving you just the directory part of the file path."
}
],
"dyk": "Using dirname can help you navigate your filesystem more easily, like having a built-in GPS for your directories!"
},
{
"id": "cmd-dirs",
"name": "dirs",
"icon": "📚🥖",
"what": "The dirs command displays the list of currently remembered directory paths in the shell's directory stack.",
"examples": [
{
"label": "Example 1",
"code": "dirs",
"note": "Shows the current directory stack, listing the directories you've navigated to."
},
{
"label": "Example 2",
"code": "pushd /path/to/another_directory; dirs",
"note": "Changes to another_directory and then shows the updated directory stack."
}
],
"dyk": "Dirs can help you keep track of where you’ve been in the terminal, like breadcrumbs in a digital forest!"
},
{
"id": "cmd-disown",
"name": "disown",
"icon": "🚪👋",
"what": "Lets a background job keep running even after you close the terminal.",
"examples": [
{
"label": "Example 1",
"code": "sleep 1000 &\ndisown",
"note": "Starts a job in the background, then cuts it loose so closing the terminal won't kill it."
},
{
"label": "Example 2",
"code": "disown -h %1",
"note": "Keeps job 1 in your jobs list, but it survives when the terminal closes."
}
],
"dyk": "disown is like nohup, but you can use it AFTER the job already started!"
},
{
"id": "cmd-dmesg",
"name": "dmesg",
"icon": "📖🔍",
"what": "The dmesg command displays kernel-related messages, including system startup messages and hardware errors.",
"examples": [
{
"label": "Example 1",
"code": "dmesg | less",
"note": "Displays the kernel messages and allows you to scroll through them using less."
},
{
"label": "Example 2",
"code": "dmesg -T",
"note": "Shows human-readable timestamps for the kernel messages, making it easier to understand when events occurred."
}
],
"dyk": "Dmesg is like reading the system's diary, giving you insight into what’s happening under the hood!"
},
{
"id": "cmd-du",
"name": "du",
"icon": "📏💾",
"what": "The du command estimates and displays the disk space used by files and directories.",
"examples": [
{
"label": "Example 1",
"code": "du my_directory",
"note": "Shows the disk usage of my_directory and its subdirectories."
},
{
"label": "Example 2",
"code": "du -h --max-depth=1",
"note": "Displays the size of each subdirectory in a human-readable format, limiting the depth to just one level."
}
],
"dyk": "Du can help you spot disk hoggers in your system, like a detective on a mission to save space!"
},
{
"id": "cmd-echo",
"name": "echo",
"icon": "📢💬",
"what": "The echo command prints text or variables to the terminal, useful for displaying messages or debugging.",
"examples": [
{
"label": "Example 1",
"code": "echo \"Hello, World!\"",
"note": "Displays \"Hello, World!\" in the terminal."
},
{
"label": "Example 2",
"code": "echo $HOME",
"note": "Prints the value of the HOME environment variable, showing your home directory path."
}
],
"dyk": "Echo can be your friendly chat partner in the terminal, helping you see what’s on your mind!"
},
{
"id": "cmd-egrep",
"name": "egrep",
"icon": "🔍⚡",
"what": "Egrep is an extended version of grep that allows the use of extended regular expressions for searching text.",
"examples": [
{
"label": "Example 1",
"code": "egrep \"pattern1|pattern2\" my_file.txt",
"note": "Searches for either pattern1 or pattern2 in my_file.txt and displays matching lines."
},
{
"label": "Example 2",
"code": "echo \"apple orange banana\" | egrep \"a.*e\"",
"note": "Matches and prints \"apple\" and \"banana\" because they contain 'a' followed by any characters and then 'e'."
}
],
"dyk": "Egrep is like having a supercharged grep, making your text searches even more powerful and flexible!",
"tags": [
[
"fossil",
"Old-timer. Use grep -E instead."
]
]
},
{
"id": "cmd-eject",
"name": "eject",
"icon": "⏏️💿",
"what": "The eject command safely ejects removable media from devices, like CDs, DVDs, or USB drives.",
"examples": [
{
"label": "Example 1",
"code": "eject /dev/cdrom",
"note": "Ejects the CD from the CD-ROM drive."
},
{
"label": "Example 2",
"code": "eject /dev/sdb",
"note": "Ejects the USB drive connected at /dev/sdb."
}
],
"dyk": "Eject is like giving your media a gentle nudge to leave the party, safely, of course!"
},
{
"id": "cmd-enable",
"name": "enable",
"icon": "🔛🚦",
"what": "The enable command is used to enable or disable shell built-in commands and functions.",
"examples": [
{
"label": "Example 1",
"code": "enable",
"note": "Lists all currently enabled built-in commands."
},
{
"label": "Example 2",
"code": "enable -n my_function",
"note": "Disables the built-in command or function named my_function."
}
],
"dyk": "Using enable can help you manage your shell commands like a traffic cop directing traffic!"
},
{
"id": "cmd-env",
"name": "env",
"icon": "🌐📋",
"what": "The env command displays the current environment variables or runs a command in a modified environment.",
"examples": [
{
"label": "Example 1",
"code": "env",
"note": "Lists all the current environment variables and their values."
},
{
"label": "Example 2",
"code": "env VAR=value my_command",
"note": "Runs my_command with the environment variable VAR set to \"value\"."
}
],
"dyk": "Env is like peeking into your shell’s backpack, showing you what tools and supplies you have at your disposal!"
},
{
"id": "cmd-ethtool",
"name": "ethtool",
"icon": "🌐🔧",
"what": "Ethtool is used to query and control network device driver and hardware settings, primarily for Ethernet devices.",
"examples": [
{
"label": "Example 1",
"code": "ethtool eth0",
"note": "Displays detailed information about the network interface eth0."
},
{
"label": "Example 2",
"code": "ethtool -s eth0 speed 100 duplex full",
"note": "Sets the speed of eth0 to 100 Mbps and enables full duplex mode."
}
],
"dyk": "Ethtool can help you tune your network settings for peak performance, like fine-tuning a musical instrument!"
},
{
"id": "cmd-eval",
"name": "eval",
"icon": "🎩✨",
"what": "The eval command executes arguments as a shell command after evaluating them, allowing you to build commands dynamically.",
"examples": [
{
"label": "Example 1",
"code": "command=\"echo Hello, World!\"; eval $command",
"note": "Evaluates the variable command and executes it, printing \"Hello, World!\"."
},
{
"label": "Example 2",
"code": "eval \"echo \\$HOME\"",
"note": "Evaluates the HOME variable and prints its value."
}
],
"dyk": "Eval is like a command magician, allowing you to create and execute commands on the fly!"
},
{
"id": "cmd-exec",
"name": "exec",
"icon": "🔄🚀",
"what": "The exec command replaces the current shell process with a new command, meaning the shell doesn’t return after executing it.",
"examples": [
{
"label": "Example 1",
"code": "exec bash",
"note": "Replaces the current shell with a new bash shell."
},
{
"label": "Example 2",
"code": "exec > output.txt",
"note": "Redirects all output from the current shell to output.txt."
}
],
"dyk": "Exec is like jumping into a new adventure without looking back, once you're in, there’s no turning back!"
},
{
"id": "cmd-exit",
"name": "exit",
"icon": "🚪👋",
"what": "The exit command terminates the current shell session, optionally returning a status code.",
"examples": [
{
"label": "Example 1",
"code": "exit",
"note": "Closes the current shell session."
},
{
"label": "Example 2",
"code": "exit 0",
"note": "Closes the shell and returns a success status code of 0."
}
],
"dyk": "Exit is your ticket out of the terminal, just make sure you save your work before you go!"
},
{
"id": "cmd-expand",
"name": "expand",
"icon": "📏✨",
"what": "The expand command converts tabs in a file to spaces, which can be useful for formatting text.",
"examples": [
{
"label": "Example 1",
"code": "expand my_file.txt",
"note": "Converts tabs in my_file.txt to spaces and displays the result."
},
{
"label": "Example 2",
"code": "expand -t 4 my_file.txt",
"note": "Converts tabs to spaces, using 4 spaces for each tab."
}
],
"dyk": "Expand can help you keep your text looking neat and tidy, like a well-organized closet!"
},
{
"id": "cmd-export",
"name": "export",
"icon": "🌐📤",
"what": "The export command sets environment variables, making them available to child processes.",
"examples": [
{
"label": "Example 1",
"code": "export MY_VAR=\"Hello\"",
"note": "Sets the environment variable MY_VAR to \"Hello\"."
},
{
"label": "Example 2",
"code": "export PATH=$PATH:/new/path",
"note": "Adds /new/path to the existing PATH variable, allowing you to run programs in that directory."
}
],
"dyk": "Using export can help you share your variables with other programs, like passing a secret note to your friends!"
},
{
"id": "cmd-expr",
"name": "expr",
"icon": "🧮⚡",
"what": "The expr command evaluates expressions and performs operations like arithmetic, string manipulation, and comparison.",
"examples": [
{
"label": "Example 1",
"code": "expr 5 + 3",
"note": "Calculates the sum of 5 and 3, returning 8."
},
{
"label": "Example 2",
"code": "expr length \"Hello\"",
"note": "Returns the length of the string \"Hello\", which is 5."
}
],
"dyk": "Expr is like a mini calculator in your terminal, perfect for quick calculations without opening a full program!"
},
{
"id": "cmd-false",
"name": "false",
"icon": "❌🎭",
"what": "The false command does nothing and returns an exit status of 1, indicating failure.",
"examples": [
{
"label": "Example 1",
"code": "false",
"note": "Simply returns an exit status of 1 without producing any output."
},
{
"label": "Example 2",
"code": "if false; then echo \"This won't run\"; fi",
"note": "The echo statement won’t run because false always returns failure!"
}
],
"dyk": "False is like a little trickster, it never succeeds, but it’s useful for testing conditions in scripts!"
},
{
"id": "cmd-fc",
"name": "fc",
"icon": "✏️🔁",
"what": "Fixes and reruns past commands. Opens your last command in a text editor, then runs it when you save.",
"examples": [
{
"label": "Example 1",
"code": "fc",
"note": "Opens your last command in the editor. Fix the typo, save, and it runs."
},
{
"label": "Example 2",
"code": "fc -s cat=less",
"note": "Reruns your last command, swapping \"cat\" for \"less\"."
}
],
"dyk": "fc stands for \"fix command.\" Perfect for when you typed a giant command with one tiny mistake!"
},
{
"id": "cmd-fdisk",
"name": "fdisk",
"icon": "💾🔧",
"what": "The fdisk command is a partition table manipulator for Linux, used to create, delete, and manage disk partitions.",
"examples": [
{
"label": "Example 1",
"code": "fdisk /dev/sda",
"note": "Opens the partition table for the first hard drive, allowing you to manage partitions."
},
{
"label": "Example 2",
"code": "fdisk -l",
"note": "Lists the partition tables for all connected disks, giving you an overview of disk usage."
}
],
"dyk": "Fdisk is like a master key for your disks, letting you organize your storage space however you want!",
"tags": [
[
"careful",
"Changing partitions can wipe data. Back up first, and make sure you picked the right disk."
]
]
},
{
"id": "cmd-fg",
"name": "fg",
"icon": "🌟💻",
"what": "The fg command brings a background job to the foreground, allowing you to interact with it in the terminal.",
"examples": [
{
"label": "Example 1",
"code": "fg %1",
"note": "Brings the first background job to the foreground."
},
{
"label": "Example 2",
"code": "fg",
"note": "Brings the most recent background job to the foreground."
}
],
"dyk": "Fg is like calling someone back into the spotlight, perfect for giving your background jobs the attention they deserve!"
},
{
"id": "cmd-fgrep",
"name": "fgrep",
"icon": "🔍🎯",
"what": "Fgrep is a version of grep that searches for fixed strings in files, ignoring regular expressions.",
"examples": [
{
"label": "Example 1",
"code": "fgrep \"fixed_string\" my_file.txt",
"note": "Searches for \"fixed_string\" in my_file.txt and displays matching lines."
},
{
"label": "Example 2",
"code": "fgrep -r \"search_term\" /path/to/directory",
"note": "Recursively searches for \"search_term\" in all files within the specified directory."
}
],
"dyk": "Fgrep is like a laser-focused searchlight, perfect for finding exact phrases without any regex distractions!",
"tags": [
[
"fossil",
"Old-timer. Use grep -F instead."
]
]
},
{
"id": "cmd-file",
"name": "file",
"icon": "🔍📄",
"what": "The file command determines the type of a file (e.g., text, binary, executable) based on its content.",
"examples": [
{
"label": "Example 1",
"code": "file my_document.txt",
"note": "Displays the type of my_document.txt, like \"ASCII text\"."
},
{
"label": "Example 2",
"code": "file /usr/bin/bash",
"note": "Shows that /usr/bin/bash is an executable file, indicating it can run as a program."
}
],
"dyk": "File can help you uncover the secrets of files, revealing what they really are behind their names!"
},
{
"id": "cmd-find",
"name": "find",
"icon": "🔍🗺️",
"what": "The find command searches for files and directories in a specified location based on various criteria.",
"examples": [
{
"label": "Example 1",
"code": "find /home/user -name \"*.txt\"",
"note": "Searches for all text files in the /home/user directory."
},
{
"label": "Example 2",
"code": "find . -type f -size +1M",
"note": "Finds files larger than 1 MB in the current directory and its subdirectories."
}
],
"dyk": "Find is like a treasure hunt in your file system, helping you track down exactly what you’re looking for!"
},
{
"id": "cmd-fmt",
"name": "fmt",
"icon": "📝✨",
"what": "The fmt command formats text files to a specified line width, making them easier to read.",
"examples": [
{
"label": "Example 1",
"code": "fmt my_text.txt",
"note": "Rewrites my_text.txt with lines wrapped to a default width of 75 characters."
},
{
"label": "Example 2",
"code": "fmt -w 50 my_text.txt",
"note": "Formats my_text.txt with lines wrapped to 50 characters wide."
}
],
"dyk": "Fmt is like a personal editor, helping you tidy up your text for a polished look!"
},
{
"id": "cmd-fold",
"name": "fold",
"icon": "📜🔄",
"what": "The fold command wraps each line of a file to a specified width, useful for displaying long lines in a more readable format.",
"examples": [
{
"label": "Example 1",
"code": "fold my_long_file.txt",
"note": "Displays my_long_file.txt with wrapped lines at the default width (usually 80 characters)."
},
{
"label": "Example 2",
"code": "fold -w 40 my_long_file.txt",
"note": "Wraps lines in my_long_file.txt at 40 characters wide."
}
],
"dyk": "Fold is like a friendly librarian, helping you present long texts in manageable bites!"
},
{
"id": "cmd-for",
"name": "for",
"icon": "🔄🎯",
"what": "The for command is used to create loops that iterate over a list of items, executing commands for each item.",
"examples": [
{
"label": "Example 1",
"code": "for i in {1..5}; do echo \"Number: $i\"; done",
"note": "Prints \"Number: 1\" through \"Number: 5\", iterating over each number."
},
{
"label": "Example 2",
"code": "for file in *.txt; do cat $file; done",
"note": "Concatenates and displays the contents of all .txt files in the current directory."
}
],
"dyk": "For loops are like your command line’s way of saying, \"Let’s do this several times!\", perfect for repetitive tasks!"
},
{
"id": "cmd-free",
"name": "free",
"icon": "💾📊",
"what": "The free command displays information about the system's memory usage, including total, used, and free memory.",
"examples": [
{
"label": "Example 1",
"code": "free",
"note": "Shows memory usage in kilobytes."
},
{
"label": "Example 2",
"code": "free -h",
"note": "Displays memory usage in a human-readable format (e.g., MB, GB)."
}
],
"dyk": "Free is like a health check for your system’s memory, keeping you informed about how much you have left to work with!"
},
{
"id": "cmd-fsck",
"name": "fsck",
"icon": "🔧💾",
"what": "The fsck command checks and repairs inconsistencies in file systems, ensuring they’re healthy and functioning properly.",
"examples": [
{
"label": "Example 1",
"code": "fsck /dev/sda1",
"note": "Checks the file system on the partition /dev/sda1 for errors."
},
{
"label": "Example 2",
"code": "fsck -y /dev/sda1",
"note": "Automatically repairs any detected errors without prompting."
}
],
"dyk": "Fsck is like a mechanic for your file systems, helping to keep everything running smoothly!",
"tags": [
[
"careful",
"Only run fsck on a drive that is not mounted, or you can damage it."
]
]
},
{
"id": "cmd-ftp",
"name": "ftp",
"icon": "📡📦",
"what": "The ftp command is a client used to transfer files to and from a remote server using the File Transfer Protocol (FTP).",
"examples": [
{
"label": "Example 1",
"code": "ftp ftp.example.com",
"note": "Connects to the FTP server at ftp.example.com."
},
{
"label": "Example 2",
"code": "put my_file.txt",
"note": "Uploads my_file.txt to the connected FTP server."
}
],
"dyk": "FTP is like sending packages over the internet, perfect for transferring files to and from servers!",
"tags": [
[
"fossil",
"Old-timer and not encrypted. Use sftp or scp instead."
]
]
},
{
"id": "cmd-function",
"name": "function",
"icon": "🔧📜",
"what": "The function command defines a reusable block of code in a shell script, allowing you to group commands and call them by name.",
"examples": [
{
"label": "Example 1",
"code": "function greet {\n  echo \"Hello, World!\"\n}",
"note": "Defines a function named greet that prints \"Hello, World!\"."
},
{
"label": "Example 2",
"code": "greet",
"note": "Calls the greet function, executing its commands."
}
],
"dyk": "Functions are like little helpers in your scripts, making your code cleaner and easier to manage!"
},
{
"id": "cmd-fuser",
"name": "fuser",
"icon": "🕵️‍♂️📄",
"what": "The fuser command identifies processes using a specified file or socket, helping you manage resource usage.",
"examples": [
{
"label": "Example 1",
"code": "fuser my_file.txt",
"note": "Lists the process IDs (PIDs) of processes using my_file.txt."
},
{
"label": "Example 2",
"code": "fuser -k my_file.txt",
"note": "Sends a kill signal to all processes using my_file.txt, terminating them."
}
],
"dyk": "Fuser is like a detective for files, helping you find out what’s using them!"
},
{
"id": "cmd-gawk",
"name": "gawk",
"icon": "🔍📊",
"what": "Gawk is a powerful text processing tool that is an enhanced version of awk, allowing for complex pattern scanning and processing.",
"examples": [
{
"label": "Example 1",
"code": "gawk '{print $1}' my_file.txt",
"note": "Prints the first column from each line of my_file.txt."
},
{
"label": "Example 2",
"code": "gawk '/pattern/ {print $2}' my_file.txt",
"note": "Searches for \"pattern\" in my_file.txt and prints the second column of matching lines."
}
],
"dyk": "Gawk is like a Swiss Army knife for text processing, perfect for extracting and manipulating data!"
},
{
"id": "cmd-getopts",
"name": "getopts",
"icon": "⚙️📋",
"what": "Getopts is a built-in shell command that parses command-line options and arguments in shell scripts.",
"examples": [
{
"label": "Example 1",
"code": "while getopts \"ab:\" option; do\n  case $option in\n    a) echo \"Option A selected\";;\n    b) echo \"Option B with argument: $OPTARG\";;\n  esac\ndone",
"note": "Parses options -a and -b, with -b expecting an argument."
},
{
"label": "Example 2",
"code": "getopts \"f:\" filename",
"note": "Parses the -f option and assigns the argument to the variable filename."
}
],
"dyk": "Getopts makes handling command-line options a breeze in your scripts, like a friendly guide for user inputs!"
},
{
"id": "cmd-grep",
"name": "grep",
"icon": "🔍🐕",
"what": "The grep command searches for specific patterns in files and outputs the matching lines.",
"examples": [
{
"label": "Example 1",
"code": "grep \"pattern\" my_file.txt",
"note": "Searches for \"pattern\" in my_file.txt and displays the matching lines."
},
{
"label": "Example 2",
"code": "grep -i \"case insensitive\" my_file.txt",
"note": "Searches for \"case insensitive\" in a case-insensitive way, matching \"Case Insensitive\" or \"CASE INSENSITIVE\"."
}
],
"dyk": "Grep is like a bloodhound for text, sniffing out exactly what you’re looking for in files!"
},
{
"id": "cmd-groupadd",
"name": "groupadd",
"icon": "👥➕",
"what": "The groupadd command creates a new group on the system.",
"examples": [
{
"label": "Example 1",
"code": "groupadd newgroup",
"note": "Creates a new group called \"newgroup\"."
},
{
"label": "Example 2",
"code": "groupadd -g 1001 anothergroup",
"note": "Creates anothergroup with a specific group ID of 1001."
}
],
"dyk": "Groupadd helps you organize users into groups, like forming teams in a class project!"
},
{
"id": "cmd-groupdel",
"name": "groupdel",
"icon": "👥🗑️",
"what": "The groupdel command deletes an existing group from the system.",
"examples": [
{
"label": "Example 1",
"code": "groupdel oldgroup",
"note": "Deletes the group called \"oldgroup\"."
},
{
"label": "Example 2",
"code": "groupdel anothergroup",
"note": "Removes anothergroup from the system completely."
}
],
"dyk": "Groupdel is like cleaning out your digital closet, removing groups you no longer need!"
},
{
"id": "cmd-groupmod",
"name": "groupmod",
"icon": "👥🔄",
"what": "The groupmod command modifies an existing group’s properties, such as its name or group ID.",
"examples": [
{
"label": "Example 1",
"code": "groupmod -n newname oldgroup",
"note": "Renames the group \"oldgroup\" to \"newname\"."
},
{
"label": "Example 2",
"code": "groupmod -g 2000 mygroup",
"note": "Changes the group ID of mygroup to 2000."
}
],
"dyk": "Groupmod is like giving your group a makeover, changing its name or ID to fit your needs!"
},
{
"id": "cmd-groups",
"name": "groups",
"icon": "👥📋",
"what": "The groups command displays the groups a user is a member of.",
"examples": [
{
"label": "Example 1",
"code": "groups",
"note": "Shows the groups that the current user belongs to."
},
{
"label": "Example 2",
"code": "groups username",
"note": "Lists the groups that the specified user (username) is a member of."
}
],
"dyk": "Groups can help manage permissions and access, like VIP passes for different areas of your system!"
},
{
"id": "cmd-gs",
"name": "gs",
"icon": "📄✨",
"what": "The gs command is a shorthand for Ghostscript, a suite for processing PostScript and PDF files.",
"examples": [
{
"label": "Example 1",
"code": "gs my_file.ps",
"note": "Opens and processes the PostScript file my_file.ps."
},
{
"label": "Example 2",
"code": "gs -dBATCH -dNOPAUSE -sDEVICE=pdfwrite -sOutputFile=output.pdf my_file.ps",
"note": "Converts my_file.ps to output.pdf without prompting for user input."
}
],
"dyk": "Gs is like a magic wand for your documents, transforming them from one format to another!"
},
{
"id": "cmd-gunzip",
"name": "gunzip",
"icon": "📦🔓",
"what": "The gunzip command decompresses files that have been compressed using gzip.",
"examples": [
{
"label": "Example 1",
"code": "gunzip my_file.gz",
"note": "Decompresses my_file.gz back to its original form, my_file."
},
{
"label": "Example 2",
"code": "gunzip -k my_file.gz",
"note": "Decompresses my_file.gz but keeps the original gzip file."
}
],
"dyk": "Gunzip is like a superhero for your files, bringing them back to their original state after being squished!"
},
{
"id": "cmd-gzip",
"name": "gzip",
"icon": "🗜️📦",
"what": "The gzip command compresses files to reduce their size, making them easier to store or transfer.",
"examples": [
{
"label": "Example 1",
"code": "gzip my_file.txt",
"note": "Compresses my_file.txt into my_file.txt.gz."
},
{
"label": "Example 2",
"code": "gzip -9 my_file.txt",
"note": "Compresses my_file.txt with maximum compression."
}
],
"dyk": "Gzip can save you space, just like packing a suitcase efficiently for a trip!"
},
{
"id": "cmd-hash",
"name": "hash",
"icon": "🗂️⚡",
"what": "The hash command displays the command search path and keeps track of the commands you've run, speeding up future executions.",
"examples": [
{
"label": "Example 1",
"code": "hash",
"note": "Displays a list of commands that have been hashed, showing the command and its path."
},
{
"label": "Example 2",
"code": "hash -r",
"note": "Resets the hash table, clearing all cached command paths."
}
],
"dyk": "Hash is like a shortcut manager for your commands, helping you run them faster by remembering where they are!"
},
{
"id": "cmd-head",
"name": "head",
"icon": "👀📄",
"what": "The head command displays the first few lines of a file, allowing you to quickly preview its contents.",
"examples": [
{
"label": "Example 1",
"code": "head my_file.txt",
"note": "Shows the first 10 lines of my_file.txt by default."
},
{
"label": "Example 2",
"code": "head -n 5 my_file.txt",
"note": "Displays the first 5 lines of my_file.txt."
}
],
"dyk": "Head is like a sneak peek into your files, giving you just enough to know what’s inside without revealing everything!"
},
{
"id": "cmd-help",
"name": "help",
"icon": "🆘📚",
"what": "The help command provides information about built-in shell commands and their usage.",
"examples": [
{
"label": "Example 1",
"code": "help",
"note": "Displays a list of all available shell built-in commands."
},
{
"label": "Example 2",
"code": "help cd",
"note": "Provides detailed information about the cd command and how to use it."
},
{
"label": "📚 Bonus",
"code": "help variables",
"note": "help variables Not a command, it's a help topic. It shows a cheat sheet of bash's built-in variables like HOME, PATH, and PS1. Shows the cheat sheet. Try echo $HOME to see one of them in action."
}
],
"dyk": "Help is like having a personal tutor right in the terminal, ready to explain commands whenever you need! PS1 is the variable that controls what your prompt looks like. Change it and your whole prompt changes!"
},
{
"id": "cmd-history",
"name": "history",
"icon": "📜⏰",
"what": "The history command displays a list of previously executed commands in the current shell session.",
"examples": [
{
"label": "Example 1",
"code": "history",
"note": "Shows all the commands you’ve typed in the current session."
},
{
"label": "Example 2",
"code": "history | grep \"git\"",
"note": "Searches the command history for any commands that include \"git\"."
}
],
"dyk": "History is like a time machine for your terminal, letting you revisit your past commands!"
},
{
"id": "cmd-hostname",
"name": "hostname",
"icon": "🏷️🌐",
"what": "The hostname command displays the name of the current host (computer) on the network.",
"examples": [
{
"label": "Example 1",
"code": "hostname",
"note": "Outputs the system's hostname, which is the name of your computer on the network."
},
{
"label": "Example 2",
"code": "hostname -f",
"note": "Displays the fully qualified domain name (FQDN) of the system."
}
],
"dyk": "Hostname is like your computer’s name tag, helping it introduce itself on the network!"
},
{
"id": "cmd-iconv",
"name": "iconv",
"icon": "🔄🌍",
"what": "The iconv command converts the encoding of text files from one character set to another.",
"examples": [
{
"label": "Example 1",
"code": "iconv -f UTF-8 -t ISO-8859-1 my_file.txt",
"note": "Converts my_file.txt from UTF-8 encoding to ISO-8859-1 encoding."
},
{
"label": "Example 2",
"code": "iconv -o output.txt -f UTF-8 -t UTF-16 my_file.txt",
"note": "Converts my_file.txt to UTF-16 and saves it as output.txt."
}
],
"dyk": "Iconv is like a translator for text files, helping them speak different languages (character sets)!"
},
{
"id": "cmd-id",
"name": "id",
"icon": "🆔👤",
"what": "The id command displays information about the current user, including user ID (UID), group ID (GID), and group memberships.",
"examples": [
{
"label": "Example 1",
"code": "id",
"note": "Shows the UID and GID of the current user along with group memberships."
},
{
"label": "Example 2",
"code": "id username",
"note": "Displays the UID and GID for the specified user (username)."
}
],
"dyk": "Id helps you understand who you are on the system, like checking your ID at a club!"
},
{
"id": "cmd-if",
"name": "if",
"icon": "🤔⚡",
"what": "The if command is used in shell scripts to evaluate conditional statements, allowing you to execute commands based on whether a condition is true or false.",
"examples": [
{
"label": "Example 1",
"code": "if [ \"$VAR\" -eq 1 ]; then echo \"Variable is 1\"; fi",
"note": "Checks if the variable VAR equals 1 and prints a message if true."
},
{
"label": "Example 2",
"code": "if [ -f my_file.txt ]; then echo \"File exists\"; else echo \"File does not exist\"; fi",
"note": "Checks if my_file.txt exists and prints a corresponding message."
}
],
"dyk": "The if command helps you make decisions in your scripts, like a traffic light directing the flow!"
},
{
"id": "cmd-ifconfig",
"name": "ifconfig",
"icon": "🌐⚙️",
"what": "The ifconfig command displays and configures network interfaces on Unix-like systems, showing IP addresses and interface status.",
"examples": [
{
"label": "Example 1",
"code": "ifconfig",
"note": "Displays all active network interfaces and their configurations."
},
{
"label": "Example 2",
"code": "ifconfig eth0 up",
"note": "Activates (brings up) the network interface eth0."
}
],
"dyk": "Ifconfig is like the control panel for your network connections, helping you see and adjust your network settings!",
"tags": [
[
"fossil",
"Old-timer. The modern replacement is ip (for example, ip a)."
]
]
},
{
"id": "cmd-ifdown",
"name": "ifdown",
"icon": "🌐⬇️",
"what": "The ifdown command disables a network interface, bringing it down and disconnecting it from the network.",
"examples": [
{
"label": "Example 1",
"code": "ifdown eth0",
"note": "Deactivates the eth0 network interface."
},
{
"label": "Example 2",
"code": "ifdown --force eth0",
"note": "Forces the deactivation of eth0, even if there are issues."
}
],
"dyk": "Ifdown is like hitting the pause button on your network connection, disconnecting you from the internet for a bit!",
"tags": [
[
"fossil",
"Old-timer on many distros. Modern systems usually use NetworkManager (nmcli) or systemd."
]
]
},
{
"id": "cmd-ifup",
"name": "ifup",
"icon": "🌐⬆️",
"what": "The ifup command enables a network interface, bringing it up and connecting it to the network.",
"examples": [
{
"label": "Example 1",
"code": "ifup eth0",
"note": "Activates the eth0 network interface, connecting it to the network."
},
{
"label": "Example 2",
"code": "ifup --force eth0",
"note": "Forces the activation of eth0, even if there are previous issues."
}
],
"dyk": "Ifup is like turning on the lights for your network connection, making sure you’re back online!",
"tags": [
[
"fossil",
"Old-timer on many distros. Modern systems usually use NetworkManager (nmcli) or systemd."
]
]
},
{
"id": "cmd-import",
"name": "import",
"icon": "📸🖼️",
"what": "The import command is used in ImageMagick to read and convert images from a display or file.",
"examples": [
{
"label": "Example 1",
"code": "import my_image.png",
"note": "Captures the screen and saves it as my_image.png."
},
{
"label": "Example 2",
"code": "import -window root screenshot.png",
"note": "Takes a screenshot of the entire screen and saves it as screenshot.png."
}
],
"dyk": "Import is like having a camera for your terminal, capturing images directly from your screen!"
},
{
"id": "cmd-install",
"name": "install",
"icon": "📦🚚",
"what": "The install command is used to copy files and set attributes, often used in package management to install software.",
"examples": [
{
"label": "Example 1",
"code": "install my_program /usr/local/bin/",
"note": "Installs my_program to the /usr/local/bin/ directory."
},
{
"label": "Example 2",
"code": "install -m 755 my_script.sh /usr/local/bin/",
"note": "Installs my_script.sh with executable permissions (755)."
}
],
"dyk": "Install is like a delivery service for your programs, placing them exactly where you need them!"
},
{
"id": "cmd-ip",
"name": "ip",
"icon": "🌐🔧",
"what": "The ip command is used to show and manipulate routing, network devices, and network interfaces.",
"examples": [
{
"label": "Example 1",
"code": "ip addr show",
"note": "Displays all IP addresses assigned to network interfaces."
},
{
"label": "Example 2",
"code": "ip link set eth0 up",
"note": "Activates the network interface eth0."
}
],
"dyk": "Ip is like a Swiss Army knife for networking, giving you tools to manage your connections effortlessly!"
},
{
"id": "cmd-jobs",
"name": "jobs",
"icon": "🎭📋",
"what": "The jobs command displays the status of jobs running in the background or suspended in the current shell session.",
"examples": [
{
"label": "Example 1",
"code": "jobs",
"note": "Lists all background and suspended jobs along with their job IDs."
},
{
"label": "Example 2",
"code": "jobs -l",
"note": "Displays job IDs along with process IDs for all jobs."
}
],
"dyk": "Jobs is like a backstage pass to your terminal’s performances, letting you see what’s happening behind the scenes!"
},
{
"id": "cmd-join",
"name": "join",
"icon": "🤝📊",
"what": "The join command merges lines of two sorted files based on a common field, allowing for easy data comparison.",
"examples": [
{
"label": "Example 1",
"code": "join file1.txt file2.txt",
"note": "Joins the lines from file1.txt and file2.txt based on the first field."
},
{
"label": "Example 2",
"code": "join -1 2 -2 1 file1.txt file2.txt",
"note": "Joins file1.txt and file2.txt using the second field from file1 and the first field from file2."
}
],
"dyk": "Join is like a matchmaking service for data, pairing lines that have something in common!"
},
{
"id": "cmd-kill",
"name": "kill",
"icon": "⚡💀",
"what": "The kill command sends a signal to a process, usually to terminate it.",
"examples": [
{
"label": "Example 1",
"code": "kill 1234",
"note": "Sends the default signal (TERM) to the process with PID 1234, requesting it to terminate."
},
{
"label": "Example 2",
"code": "kill -9 1234",
"note": "Forces the termination of the process with PID 1234 using the KILL signal."
}
],
"dyk": "Kill can be your process bouncer, helping you manage which programs get to stay and which have to go!",
"tags": [
[
"careful",
"kill -9 stops a program instantly with no chance to save. Try plain kill first."
]
]
},
{
"id": "cmd-killall",
"name": "killall",
"icon": "⚡🧹",
"what": "The killall command terminates all processes with a specified name, making it easier to stop multiple instances at once.",
"examples": [
{
"label": "Example 1",
"code": "killall firefox",
"note": "Terminates all running instances of the Firefox browser."
},
{
"label": "Example 2",
"code": "killall -9 chrome",
"note": "Forces the termination of all instances of Chrome without allowing them to clean up."
}
],
"dyk": "Killall is like a super bouncer, clearing out all instances of a program in one go!",
"tags": [
[
"careful",
"This kills every process with that name, not just one. Make sure that is what you want."
]
]
},
{
"id": "cmd-ksh",
"name": "ksh",
"icon": "🐚✨",
"what": "The ksh command starts the Korn shell, a command interpreter that offers enhanced features over the Bourne shell.",
"examples": [
{
"label": "Example 1",
"code": "ksh",
"note": "Launches a new Korn shell session."
},
{
"label": "Example 2",
"code": "ksh script.sh",
"note": "Executes the script.sh using the Korn shell."
}
],
"dyk": "Ksh is like the stylish cousin of the shell family, offering more features and flexibility for your scripts!"
},
{
"id": "cmd-last",
"name": "last",
"icon": "📚⏰",
"what": "The last command shows a list of the most recent logins to the system, displaying user information and login times.",
"examples": [
{
"label": "Example 1",
"code": "last",
"note": "Displays the login history of all users."
},
{
"label": "Example 2",
"code": "last username",
"note": "Shows the login history for the specified user (username)."
}
],
"dyk": "Last is like your system’s guestbook, keeping track of who’s been in and when!"
},
{
"id": "cmd-less",
"name": "less",
"icon": "👀📄",
"what": "The less command is a file viewer that allows you to view (but not modify) the contents of a file one screen at a time.",
"examples": [
{
"label": "Example 1",
"code": "less my_file.txt",
"note": "Opens my_file.txt in the less viewer, allowing you to scroll through it."
},
{
"label": "Example 2",
"code": "cat my_file.txt | less",
"note": "Pipes the output of cat into less for easy viewing."
}
],
"dyk": "Less is like a window to your files, letting you peek inside without making any changes!"
},
{
"id": "cmd-let",
"name": "let",
"icon": "🧮⚡",
"what": "The let command evaluates arithmetic expressions and performs calculations within shell scripts.",
"examples": [
{
"label": "Example 1",
"code": "let \"result = 5 + 3\"",
"note": "Calculates the sum of 5 and 3, storing it in the variable result."
},
{
"label": "Example 2",
"code": "let \"num++\"",
"note": "Increments the variable num by 1."
}
],
"dyk": "Let is like a math whiz for your scripts, helping you perform calculations effortlessly!"
},
{
"id": "cmd-link",
"name": "link",
"icon": "🔗📄",
"what": "The link command creates a hard link to a file, allowing multiple directory entries to reference the same file content.",
"examples": [
{
"label": "Example 1",
"code": "link original.txt link_to_original.txt",
"note": "Creates a hard link named link_to_original.txt pointing to original.txt."
},
{
"label": "Example 2",
"code": "link /path/to/source /path/to/link",
"note": "Creates a hard link from the source file to the specified link path."
}
],
"dyk": "Link is like making a copy of a key, it lets you access the same file from different places without duplicating it!"
},
{
"id": "cmd-ln",
"name": "ln",
"icon": "🔗📄",
"what": "The ln command creates links between files, allowing you to create hard links or symbolic links.",
"examples": [
{
"label": "Example 1",
"code": "ln my_file.txt link_to_file.txt",
"note": "Creates a hard link named link_to_file.txt pointing to my_file.txt."
},
{
"label": "Example 2",
"code": "ln -s my_file.txt symlink_to_file.txt",
"note": "Creates a symbolic link named symlink_to_file.txt that points to my_file.txt."
}
],
"dyk": "Ln is like having multiple names for the same file, making it easier to access your important documents!"
},
{
"id": "cmd-local",
"name": "local",
"icon": "🏠📊",
"what": "The local command is used in shell functions to create variables that are only accessible within that function's scope.",
"examples": [
{
"label": "Example 1",
"code": "function my_function {\n  local my_var=\"Hello\"\n  echo $my_var\n}",
"note": "Defines a function that sets my_var locally and prints it."
},
{
"label": "Example 2",
"code": "my_function",
"note": "Calls the function, displaying \"Hello\" but my_var is not accessible outside."
}
],
"dyk": "Local variables are like your secret stash, only you and your function know about them!"
},
{
"id": "cmd-locate",
"name": "locate",
"icon": "🔍🗺️",
"what": "The locate command quickly finds files by searching through a pre-built database of files on the system.",
"examples": [
{
"label": "Example 1",
"code": "locate my_file.txt",
"note": "Searches for all instances of my_file.txt in the database."
},
{
"label": "Example 2",
"code": "locate \"*.jpg\"",
"note": "Finds all JPEG files on the system."
}
],
"dyk": "Locate is like having a treasure map for your files, letting you find hidden gems in no time!"
},
{
"id": "cmd-logname",
"name": "logname",
"icon": "👤🏷️",
"what": "The logname command displays the name of the currently logged-in user.",
"examples": [
{
"label": "Example 1",
"code": "logname",
"note": "Outputs the username of the user currently logged into the terminal."
},
{
"label": "Example 2",
"code": "echo \"Current user is: $(logname)\"",
"note": "Prints a message with the current logged-in user's name."
}
],
"dyk": "Logname is like a name tag for your terminal session, reminding you who you are while you work!"
},
{
"id": "cmd-logout",
"name": "logout",
"icon": "🚪👋",
"what": "The logout command terminates the current login session, logging the user out of the shell.",
"examples": [
{
"label": "Example 1",
"code": "logout",
"note": "Closes the current shell session and logs you out."
},
{
"label": "Example 2",
"code": "logout  # When used in a remote session like SSH",
"note": "Logs you out of the remote session."
}
],
"dyk": "Logout is your exit ticket from the terminal, making sure you leave when you’re done!"
},
{
"id": "cmd-look",
"name": "look",
"icon": "👀📖",
"what": "The look command displays lines in a file that begin with a specified string, making it easy to find relevant entries.",
"examples": [
{
"label": "Example 1",
"code": "look my",
"note": "Searches for lines in the system's dictionary that begin with \"my\"."
},
{
"label": "Example 2",
"code": "look -f my",
"note": "Searches without considering case sensitivity."
}
],
"dyk": "Look is like a quick reference guide, helping you find words that start with a specific letter combination!"
},
{
"id": "cmd-lpc",
"name": "lpc",
"icon": "🖨️👨‍💼",
"what": "The lpc command is used to control the line printer daemon (LPD) and manage printer queues.",
"examples": [
{
"label": "Example 1",
"code": "lpc status",
"note": "Displays the status of the printer queues."
},
{
"label": "Example 2",
"code": "lpc stop printer_name",
"note": "Stops the specified printer from accepting jobs."
}
],
"dyk": "Lpc is like a manager for your printers, helping you keep everything running smoothly!",
"tags": [
[
"fossil",
"Old-timer. Most modern systems manage printers with CUPS."
]
]
},
{
"id": "cmd-lpd",
"name": "lpd",
"icon": "🖨️🤖",
"what": "lpd is the old-school print daemon, the background program that takes print jobs and feeds them to the printer. Most modern systems use CUPS instead, so you may never touch it.",
"examples": [
{
"label": "Example 1",
"code": "systemctl status cups",
"note": "Checks whether the modern print service (CUPS) is running, which is what most distros use now."
}
],
"dyk": "\"Daemon\" just means a program that quietly works in the background. No horns included.",
"tags": [
[
"fossil",
"Old-timer. Most modern systems use CUPS."
]
]
},
{
"id": "cmd-lpq",
"name": "lpq",
"icon": "📋👀",
"what": "lpq shows the print queue, meaning which jobs are waiting and which one is printing right now.",
"examples": [
{
"label": "Example 1",
"code": "lpq",
"note": "Lists the jobs waiting on your default printer."
},
{
"label": "Example 2",
"code": "lpq -P printer_name",
"note": "Shows the queue for one specific printer."
}
],
"dyk": "Stuck print job? Find its number with lpq, then cancel it with lprm followed by that number."
},
{
"id": "cmd-lpr",
"name": "lpr",
"icon": "🖨️📄",
"what": "The lpr command sends files to the printer, allowing you to print documents from the command line.",
"examples": [
{
"label": "Example 1",
"code": "lpr my_document.txt",
"note": "Sends my_document.txt to the default printer."
},
{
"label": "Example 2",
"code": "lpr -P printer_name my_document.txt",
"note": "Sends my_document.txt to a specified printer."
}
],
"dyk": "Lpr is like hitting the print button on your computer, sending documents straight to the printer for you!"
},
{
"id": "cmd-ls",
"name": "ls",
"icon": "📁👀",
"what": "The ls command lists the contents of a directory, showing files and subdirectories.",
"examples": [
{
"label": "Example 1",
"code": "ls",
"note": "Displays the names of all files and directories in the current location."
},
{
"label": "Example 2",
"code": "ls -l",
"note": "Shows detailed information (permissions, owner, size, etc.) for each file and directory."
}
],
"dyk": "Ls is like opening a drawer to see what’s inside, perfect for checking your files!"
},
{
"id": "cmd-lsof",
"name": "lsof",
"icon": "🔍📄",
"what": "The lsof command lists open files and the processes that opened them, giving insight into file usage.",
"examples": [
{
"label": "Example 1",
"code": "lsof",
"note": "Displays all open files and the associated processes on the system."
},
{
"label": "Example 2",
"code": "lsof -u username",
"note": "Lists all open files for the specified user (username)."
}
],
"dyk": "Lsof is like a detective for your system, uncovering what files are in use and by which processes!"
},
{
"id": "cmd-make",
"name": "make",
"icon": "🔨🏗️",
"what": "The make command builds and compiles programs from source code using a Makefile that defines build instructions.",
"examples": [
{
"label": "Example 1",
"code": "make",
"note": "Compiles the project according to the instructions in the Makefile in the current directory."
},
{
"label": "Example 2",
"code": "make clean",
"note": "Cleans up the compiled files, preparing the project for a fresh build."
}
],
"dyk": "Make is like a personal assistant for developers, automating the compilation process and saving time!"
},
{
"id": "cmd-man",
"name": "man",
"icon": "📚📖",
"what": "The man command displays the manual pages for other commands, providing detailed documentation and usage information.",
"examples": [
{
"label": "Example 1",
"code": "man ls",
"note": "Displays the manual for the ls command, explaining its options and usage."
},
{
"label": "Example 2",
"code": "man 5 passwd",
"note": "Shows the manual for the passwd file format, providing specific details."
}
],
"dyk": "Man pages are like instruction manuals for your commands, helping you understand how to use them effectively!"
},
{
"id": "cmd-mapfile",
"name": "mapfile",
"icon": "📄➡️📦",
"what": "Reads a file into an array, one line per slot.",
"examples": [
{
"label": "Example 1",
"code": "mapfile -t lines < my_file.txt\necho \"${lines[0]}\"",
"note": "Loads my_file.txt and prints the first line."
},
{
"label": "Example 2",
"code": "mapfile -t lines < my_file.txt\necho \"${#lines[@]}\"",
"note": "Prints how many lines the file has."
}
],
"dyk": "The -t chops the invisible \"enter\" off the end of each line. Without it, every line keeps a hidden newline!"
},
{
"id": "cmd-mkdir",
"name": "mkdir",
"icon": "📁🆕",
"what": "The mkdir command creates a new directory in the specified location.",
"examples": [
{
"label": "Example 1",
"code": "mkdir new_directory",
"note": "Creates a new directory called new_directory in the current location."
},
{
"label": "Example 2",
"code": "mkdir -p /path/to/new_directory",
"note": "Creates a new directory along with any necessary parent directories in the specified path."
}
],
"dyk": "Mkdir is like planting a new flag in your filesystem, marking a spot for your new projects!"
},
{
"id": "cmd-mkfifo",
"name": "mkfifo",
"icon": "🔄📡",
"what": "The mkfifo command creates a named pipe (FIFO) for inter-process communication, allowing data to flow between processes.",
"examples": [
{
"label": "Example 1",
"code": "mkfifo my_pipe",
"note": "Creates a named pipe called my_pipe."
},
{
"label": "Example 2",
"code": "echo \"Hello\" > my_pipe &",
"note": "Sends \"Hello\" to my_pipe, which can be read by another process."
}
],
"dyk": "Mkfifo is like setting up a direct communication line between processes, allowing them to share data smoothly!"
},
{
"id": "cmd-mknod",
"name": "mknod",
"icon": "🔧🗝️",
"what": "The mknod command creates a special file, typically used for creating device files in Unix-like operating systems.",
"examples": [
{
"label": "Example 1",
"code": "mknod my_device c 1 3",
"note": "Creates a character device file named my_device with major number 1 and minor number 3."
},
{
"label": "Example 2",
"code": "mknod my_fifo p",
"note": "Creates a named pipe (FIFO) called my_fifo."
}
],
"dyk": "Mknod is like crafting a new key for your system, allowing you to access hardware directly!"
},
{
"id": "cmd-mmv",
"name": "mmv",
"icon": "📦✨",
"what": "The mmv command moves or renames multiple files according to specified patterns, making batch operations easier.",
"examples": [
{
"label": "Example 1",
"code": "mmv \"*.txt\" \"#1.bak\"",
"note": "Renames all .txt files to .bak files, keeping the original filename."
},
{
"label": "Example 2",
"code": "mmv \"file_*.txt\" \"new_file_#1.txt\"",
"note": "Renames files matching the pattern file_*.txt to new_file_#1.txt."
}
],
"dyk": "Mmv is like a magician for your files, allowing you to transform multiple names with a single command!"
},
{
"id": "cmd-more",
"name": "more",
"icon": "📖📄",
"what": "The more command displays the contents of a file one screen at a time, allowing for easy navigation through text.",
"examples": [
{
"label": "Example 1",
"code": "more my_file.txt",
"note": "Opens my_file.txt in the more viewer, letting you scroll through it."
},
{
"label": "Example 2",
"code": "cat my_file.txt | more",
"note": "Pipes the output of cat into more for easier reading."
}
],
"dyk": "More is like a page-turner for your terminal, letting you read text files without overwhelming your screen!"
},
{
"id": "cmd-most",
"name": "most",
"icon": "📖⭐",
"what": "Most is a paging program that allows you to view (but not change) the contents of files, similar to more but with more features.",
"examples": [
{
"label": "Example 1",
"code": "most my_file.txt",
"note": "Opens my_file.txt in the most viewer, allowing for easy scrolling and navigation."
},
{
"label": "Example 2",
"code": "cat my_file.txt | most",
"note": "Pipes the output of cat into most for an enhanced viewing experience."
}
],
"dyk": "Most is like an upgraded version of more, offering more features for a better reading experience in the terminal!"
},
{
"id": "cmd-mount",
"name": "mount",
"icon": "🔗💾",
"what": "The mount command attaches a filesystem to the system, making it accessible through the directory tree.",
"examples": [
{
"label": "Example 1",
"code": "mount /dev/sdb1 /mnt",
"note": "Mounts the filesystem on /dev/sdb1 to the /mnt directory."
},
{
"label": "Example 2",
"code": "mount -t nfs server:/path /mnt",
"note": "Mounts a remote NFS filesystem to the /mnt directory."
}
],
"dyk": "Mount is like opening a door to a storage device, giving you access to its contents!"
},
{
"id": "cmd-mtools",
"name": "mtools",
"icon": "💾🔧",
"what": "Mtools is a suite of utilities for managing MS-DOS files on Unix-like systems, allowing you to read and write to FAT filesystems.",
"examples": [
{
"label": "Example 1",
"code": "mcopy a:file.txt /home/user/",
"note": "Copies file.txt from the floppy disk drive (a:) to the user's home directory."
},
{
"label": "Example 2",
"code": "mdir a:",
"note": "Displays the contents of the floppy disk drive."
}
],
"dyk": "Mtools lets you interact with DOS-formatted disks, bridging the gap between different filesystems!"
},
{
"id": "cmd-mtr",
"name": "mtr",
"icon": "🌐🔍",
"what": "Mtr (My Traceroute) combines the functionality of the traceroute and ping commands to provide real-time network path information.",
"examples": [
{
"label": "Example 1",
"code": "mtr example.com",
"note": "Starts a real-time traceroute to example.com, showing the path taken by packets."
},
{
"label": "Example 2",
"code": "mtr -r example.com",
"note": "Runs mtr in report mode, providing a summary of the results."
}
],
"dyk": "Mtr is like a network detective, tracing the path your data takes and spotting any issues along the way!"
},
{
"id": "cmd-mv",
"name": "mv",
"icon": "📦🚚",
"what": "The mv command moves or renames files and directories in the filesystem.",
"examples": [
{
"label": "Example 1",
"code": "mv old_file.txt new_file.txt",
"note": "Renames old_file.txt to new_file.txt."
},
{
"label": "Example 2",
"code": "mv my_file.txt /path/to/destination/",
"note": "Moves my_file.txt to the specified destination directory."
}
],
"dyk": "Mv is like a mover for your files, helping you rearrange your digital space!",
"tags": [
[
"careful",
"mv overwrites a file with the same name without asking. Use mv -i if you want it to check first."
]
]
},
{
"id": "cmd-netstat",
"name": "netstat",
"icon": "🌐📊",
"what": "The netstat command displays network connections, routing tables, interface statistics, and more, providing insight into network activity.",
"examples": [
{
"label": "Example 1",
"code": "netstat",
"note": "Shows active network connections and listening ports."
},
{
"label": "Example 2",
"code": "netstat -tuln",
"note": "Displays only TCP and UDP connections along with their listening states."
}
],
"dyk": "Netstat is like a window into your network, letting you see what’s connected and where your data is going!",
"tags": [
[
"fossil",
"Old-timer. The modern replacement is ss (for example, ss -tulpn)."
]
]
},
{
"id": "cmd-nice",
"name": "nice",
"icon": "😊⚖️",
"what": "The nice command runs a program with a modified scheduling priority, allowing you to influence how much CPU time it receives.",
"examples": [
{
"label": "Example 1",
"code": "nice -n 10 my_script.sh",
"note": "Runs my_script.sh with a lower priority, allowing other processes to have more CPU time."
},
{
"label": "Example 2",
"code": "nice my_command",
"note": "Runs my_command with the default nice value, which is 0."
}
],
"dyk": "Nice is like giving a friendly nudge to your programs, letting them know they should play nice with others!"
},
{
"id": "cmd-nl",
"name": "nl",
"icon": "📝🔢",
"what": "The nl command adds line numbers to the output of a file, making it easier to reference specific lines.",
"examples": [
{
"label": "Example 1",
"code": "nl my_file.txt",
"note": "Displays the contents of my_file.txt with line numbers added."
},
{
"label": "Example 2",
"code": "nl -b a my_file.txt",
"note": "Numbers only non-empty lines in my_file.txt."
}
],
"dyk": "Nl is like a helpful librarian, keeping track of lines in your text files for easier navigation!"
},
{
"id": "cmd-nohup",
"name": "nohup",
"icon": "🛡️💪",
"what": "The nohup command runs a command immune to hangups, allowing it to continue running even after you log out.",
"examples": [
{
"label": "Example 1",
"code": "nohup my_script.sh &",
"note": "Executes my_script.sh in the background, allowing it to continue running after logging out."
},
{
"label": "Example 2",
"code": "nohup command > output.log 2>&1 &",
"note": "Runs command in the background and redirects both standard output and errors to output.log."
}
],
"dyk": "Nohup is like a safety net for your processes, ensuring they keep running even if you leave the terminal!"
},
{
"id": "cmd-notify-send",
"name": "notify-send",
"icon": "📢💬",
"what": "The notify-send command sends desktop notifications to the user, allowing you to display messages on the desktop.",
"examples": [
{
"label": "Example 1",
"code": "notify-send \"Task Complete\" \"Your script has finished running.\"",
"note": "Displays a notification with the title \"Task Complete\" and the message."
},
{
"label": "Example 2",
"code": "notify-send -u critical \"Error\" \"Something went wrong!\"",
"note": "Sends a critical notification indicating an error has occurred."
}
],
"dyk": "Notify-send is like a digital post-it note, popping up reminders and messages right on your screen!"
},
{
"id": "cmd-nslookup",
"name": "nslookup",
"icon": "🔍🌐",
"what": "The nslookup command queries DNS to obtain domain name or IP address mapping information.",
"examples": [
{
"label": "Example 1",
"code": "nslookup example.com",
"note": "Looks up the IP address associated with example.com."
},
{
"label": "Example 2",
"code": "nslookup 192.0.2.1",
"note": "Finds the domain name associated with the IP address 192.0.2.1."
}
],
"dyk": "Nslookup is like a detective for domain names, helping you uncover the addresses behind websites!"
},
{
"id": "cmd-op",
"name": "op",
"icon": "🔐💎",
"what": "The op command is often used in conjunction with the op command-line tool for managing password vaults, particularly with 1Password.",
"examples": [
{
"label": "Example 1",
"code": "op get item \"My Login\"",
"note": "Retrieves the login details stored in the 1Password vault."
},
{
"label": "Example 2",
"code": "op create item login --title \"New Site\" --username \"user\" --password \"pass\"",
"note": "Creates a new login item in the 1Password vault."
}
],
"dyk": "Op is like having a digital safe for your passwords, making it easy to access them securely!",
"tags": [
[
"heads",
"op is not built into Linux. It is the 1Password command-line tool, and you only have it if you install it."
]
]
},
{
"id": "cmd-open",
"name": "open",
"icon": "🔓📄",
"what": "The open command is used to open files or directories in their associated applications, primarily on macOS.",
"examples": [
{
"label": "Example 1",
"code": "open my_file.txt",
"note": "Opens my_file.txt in the default text editor."
},
{
"label": "Example 2",
"code": "open .",
"note": "Opens the current directory in Finder."
}
],
"dyk": "Open is like a key to your files, unlocking them in the applications they were meant for!",
"tags": [
[
"heads",
"open is a macOS command. On Linux, the one you want is xdg-open."
]
]
},
{
"id": "cmd-passwd",
"name": "passwd",
"icon": "🔐🔑",
"what": "The passwd command changes the password for a user account, ensuring account security.",
"examples": [
{
"label": "Example 1",
"code": "passwd",
"note": "Prompts you to enter a new password for your current user account."
},
{
"label": "Example 2",
"code": "passwd username",
"note": "Changes the password for the specified user (username) if you have the necessary permissions."
}
],
"dyk": "Using passwd regularly helps keep your accounts secure, like changing the locks on your digital doors!"
},
{
"id": "cmd-paste",
"name": "paste",
"icon": "🤝📄",
"what": "The paste command merges lines of files side by side, allowing you to combine content from multiple files.",
"examples": [
{
"label": "Example 1",
"code": "paste file1.txt file2.txt",
"note": "Combines lines from file1.txt and file2.txt, displaying them side by side."
},
{
"label": "Example 2",
"code": "paste -d ',' file1.txt file2.txt",
"note": "Combines lines from both files using a comma as the delimiter."
}
],
"dyk": "Paste is like a creative collaboration, bringing together content from different sources seamlessly!"
},
{
"id": "cmd-pathchk",
"name": "pathchk",
"icon": "✅🛤️",
"what": "The pathchk command checks file names and paths for validity, ensuring they are usable in your environment.",
"examples": [
{
"label": "Example 1",
"code": "pathchk my_file.txt",
"note": "Checks if my_file.txt is a valid file name in the current environment."
},
{
"label": "Example 2",
"code": "pathchk /path/to/my_directory/",
"note": "Validates the specified directory path for usability."
}
],
"dyk": "Pathchk is like a safety check for your file names, ensuring they won't cause trouble down the road!"
},
{
"id": "cmd-ping",
"name": "ping",
"icon": "📡👋",
"what": "The ping command tests network connectivity between your computer and a specified host by sending ICMP echo requests.",
"examples": [
{
"label": "Example 1",
"code": "ping example.com",
"note": "Sends packets to example.com to check if it's reachable and measures response times."
},
{
"label": "Example 2",
"code": "ping -c 4 192.0.2.1",
"note": "Sends 4 packets to the IP address 192.0.2.1 and displays the results."
}
],
"dyk": "Ping is like sending a friendly wave to another computer, checking if it's there and ready to respond!"
},
{
"id": "cmd-pkill",
"name": "pkill",
"icon": "⚡🧹",
"what": "The pkill command sends signals to processes based on name, user, or other criteria, allowing you to terminate them.",
"examples": [
{
"label": "Example 1",
"code": "pkill firefox",
"note": "Terminates all processes with the name \"firefox\"."
},
{
"label": "Example 2",
"code": "pkill -u username",
"note": "Sends the default signal to all processes running under the specified user."
}
],
"dyk": "Pkill is like a quick way to clear out processes you no longer need, just like a digital cleanup!",
"tags": [
[
"careful",
"pkill matches by name, so it can hit more programs than you expect."
]
]
},
{
"id": "cmd-popd",
"name": "popd",
"icon": "🔙📁",
"what": "The popd command removes the top directory from the directory stack and changes the current directory to that location.",
"examples": [
{
"label": "Example 1",
"code": "popd",
"note": "Changes the current directory to the last directory that was added to the stack with pushd."
},
{
"label": "Example 2",
"code": "pushd /path/to/directory; popd",
"note": "Pushes a directory onto the stack and then immediately pops it off, returning to the original location."
}
],
"dyk": "Popd is like stepping back in time in your terminal journey, taking you back to your previous location!"
},
{
"id": "cmd-pr",
"name": "pr",
"icon": "🖨️📄",
"what": "The pr command formats text files for printing, allowing you to control pagination and display options.",
"examples": [
{
"label": "Example 1",
"code": "pr my_file.txt",
"note": "Formats my_file.txt for printing, adding headers and pagination."
},
{
"label": "Example 2",
"code": "pr -h \"My Document\" my_file.txt",
"note": "Formats my_file.txt with a custom header \"My Document\"."
}
],
"dyk": "Pr can make your text files print-friendly, ensuring they look great when you send them to the printer!"
},
{
"id": "cmd-printcap",
"name": "printcap",
"icon": "🖨️📋",
"what": "printcap isn't actually a command. It's an old config file (/etc/printcap) that lists your printers and their settings.",
"examples": [
{
"label": "Example 1",
"code": "cat /etc/printcap",
"note": "Shows the file's contents, if your system still has one."
}
],
"dyk": "Modern systems manage printers through CUPS, so this file is mostly a fossil now.",
"tags": [
[
"fossil",
"Old-timer. Most modern systems manage printers with CUPS."
]
]
},
{
"id": "cmd-printenv",
"name": "printenv",
"icon": "🌐📋",
"what": "The printenv command displays the environment variables and their values in the current shell session.",
"examples": [
{
"label": "Example 1",
"code": "printenv",
"note": "Lists all environment variables currently set in the shell."
},
{
"label": "Example 2",
"code": "printenv PATH",
"note": "Displays the value of the PATH environment variable, showing directories where executable files are located."
}
],
"dyk": "Printenv is like a peek inside your shell's backpack, showing you all the tools and resources available to you!"
},
{
"id": "cmd-printf",
"name": "printf",
"icon": "🎨📝",
"what": "The printf command formats and prints data to the terminal, providing more control over output compared to echo.",
"examples": [
{
"label": "Example 1",
"code": "printf \"Hello, %s!\\n\" \"World\"",
"note": "Prints \"Hello, World!\" with formatting."
},
{
"label": "Example 2",
"code": "printf \"Number: %.2f\\n\" 3.14159",
"note": "Prints \"Number: 3.14\", formatting the number to two decimal places."
}
],
"dyk": "Printf is like a master chef in the kitchen, allowing you to carefully prepare and present your output!"
},
{
"id": "cmd-ps",
"name": "ps",
"icon": "📸🔄",
"what": "The ps command displays information about currently running processes, including their status and resource usage.",
"examples": [
{
"label": "Example 1",
"code": "ps",
"note": "Displays a snapshot of the current processes running in the shell."
},
{
"label": "Example 2",
"code": "ps aux",
"note": "Shows detailed information about all running processes for all users."
}
],
"dyk": "Ps is like a snapshot of your system's activity, giving you insight into what's happening behind the scenes!"
},
{
"id": "cmd-pushd",
"name": "pushd",
"icon": "📚➡️",
"what": "The pushd command adds a directory to the directory stack and changes the current directory to that location.",
"examples": [
{
"label": "Example 1",
"code": "pushd /path/to/directory",
"note": "Changes to /path/to/directory and adds it to the directory stack."
},
{
"label": "Example 2",
"code": "pushd",
"note": "Displays the current directory stack."
}
],
"dyk": "Pushd is like a bookmark for your terminal, letting you easily jump back and forth between directories!"
},
{
"id": "cmd-pwd",
"name": "pwd",
"icon": "🧭📍",
"what": "The pwd command (print working directory) displays the full path of the current directory you are in.",
"examples": [
{
"label": "Example 1",
"code": "pwd",
"note": "Outputs the full path of the current working directory."
},
{
"label": "Example 2",
"code": "echo \"You are in: $(pwd)\"",
"note": "Prints the current directory as part of a message."
}
],
"dyk": "Pwd is like a GPS for your filesystem, always telling you where you are!"
},
{
"id": "cmd-quota",
"name": "quota",
"icon": "📊💾",
"what": "The quota command displays the disk space and inode usage for users and groups, showing limits and current usage.",
"examples": [
{
"label": "Example 1",
"code": "quota",
"note": "Displays the disk usage and limits for the current user."
},
{
"label": "Example 2",
"code": "quota -u username",
"note": "Shows the disk usage and limits for the specified user (username)."
}
],
"dyk": "Quota helps you keep track of your digital storage limits, ensuring you don’t run out of space unexpectedly!"
},
{
"id": "cmd-ranlib",
"name": "ranlib",
"icon": "📚🔍",
"what": "The ranlib command generates an index to the contents of an archive, allowing tools to efficiently access the archive's members.",
"examples": [
{
"label": "Example 1",
"code": "ranlib my_archive.a",
"note": "Creates or updates the index for the archive my_archive.a."
},
{
"label": "Example 2",
"code": "ranlib -v my_archive.a",
"note": "Verbosely updates the index and shows the output during the process."
}
],
"dyk": "Ranlib is like putting a table of contents in your book, making it easier to find what you're looking for inside an archive!"
},
{
"id": "cmd-rcp",
"name": "rcp",
"icon": "📡📦",
"what": "The rcp command (remote copy) is used to copy files between machines over a network, typically using the RSH protocol.",
"examples": [
{
"label": "Example 1",
"code": "rcp file.txt user@remote_host:/path/to/destination/",
"note": "Copies file.txt from the local machine to the specified destination on a remote host."
},
{
"label": "Example 2",
"code": "rcp user@remote_host:/path/to/file.txt .",
"note": "Copies file.txt from the remote host to the current directory on the local machine."
}
],
"dyk": "Rcp is like sending a package through the internet, allowing you to transfer files between different computers seamlessly!",
"tags": [
[
"fossil",
"Old-timer and not encrypted. Use scp or rsync instead."
]
]
},
{
"id": "cmd-read",
"name": "read",
"icon": "📝👂",
"what": "The read command takes user input from the terminal and stores it in a variable, allowing interaction with the user in shell scripts.",
"examples": [
{
"label": "Example 1",
"code": "read username",
"note": "Prompts the user to enter a username and stores it in the variable username."
},
{
"label": "Example 2",
"code": "read -p \"Enter your age: \" age",
"note": "Asks the user to enter their age, storing the input in the variable age."
}
],
"dyk": "Read is like a friendly interviewer, asking for information and helping you gather user input in scripts!"
},
{
"id": "cmd-readarray",
"name": "readarray",
"icon": "📄➡️📦",
"what": "The exact same thing as mapfile, just another name for it.",
"examples": [
{
"label": "Example 1",
"code": "readarray -t files < <(ls)\necho \"${files[@]}\"",
"note": "Puts every file name in the folder into an array, then prints them."
},
{
"label": "Example 2",
"code": "readarray -t todo < todo.txt\necho \"First up: ${todo[0]}\"",
"note": "Reads your to-do list and shows the first item."
}
],
"dyk": "mapfile and readarray are twins. Use whichever name is easier to remember!"
},
{
"id": "cmd-readonly",
"name": "readonly",
"icon": "🔒📊",
"what": "The readonly command marks a variable as read-only, preventing it from being changed or unset.",
"examples": [
{
"label": "Example 1",
"code": "readonly MY_VAR=\"Constant Value\"",
"note": "Sets MY_VAR as a read-only variable, so it can’t be modified later."
},
{
"label": "Example 2",
"code": "readonly -p",
"note": "Displays a list of all read-only variables in the current shell."
}
],
"dyk": "Readonly is like a “Do Not Touch” sign for variables, ensuring they stay the same no matter what!"
},
{
"id": "cmd-reboot",
"name": "reboot",
"icon": "🔄💻",
"what": "The reboot command restarts the system, terminating all processes and rebooting the operating system.",
"examples": [
{
"label": "Example 1",
"code": "reboot",
"note": "Immediately reboots the system."
},
{
"label": "Example 2",
"code": "reboot now",
"note": "Reboots the system immediately, similar to the first example."
}
],
"dyk": "Reboot is like hitting the refresh button for your computer, giving it a new start!",
"tags": [
[
"careful",
"Save your work first. Unsaved stuff is gone after a reboot."
]
]
},
{
"id": "cmd-rename",
"name": "rename",
"icon": "🏷️✨",
"what": "The rename command changes the names of files according to specified patterns, allowing batch renaming.",
"examples": [
{
"label": "Example 1",
"code": "rename 's/.txt/.bak/' *.txt",
"note": "Renames all .txt files in the current directory to .bak files."
},
{
"label": "Example 2",
"code": "rename 's/file/file_/' file*",
"note": "Renames files starting with \"file\" to start with \"file_\" instead."
}
],
"dyk": "Rename is like a magic wand for your file names, transforming them in bulk with just a flick!"
},
{
"id": "cmd-renice",
"name": "renice",
"icon": "⚖️🔧",
"what": "The renice command changes the priority of running processes, allowing you to adjust how much CPU time they receive.",
"examples": [
{
"label": "Example 1",
"code": "renice 10 -p 1234",
"note": "Sets the priority of the process with PID 1234 to 10, making it lower priority."
},
{
"label": "Example 2",
"code": "renice -5 -u username",
"note": "Increases the priority of all processes owned by the specified user (username)."
}
],
"dyk": "Renice is like adjusting the volume on your processes, helping you control which ones get the most attention!"
},
{
"id": "cmd-reset",
"name": "reset",
"icon": "🔄✨",
"what": "The reset command initializes the terminal to a default state, clearing any corrupted display settings.",
"examples": [
{
"label": "Example 1",
"code": "reset",
"note": "Resets the terminal display, clearing any formatting issues."
},
{
"label": "Example 2",
"code": "reset -I",
"note": "Resets the terminal and initializes it in a specific way (if supported)."
}
],
"dyk": "Reset is like giving your terminal a fresh start, clearing up any display glitches!"
},
{
"id": "cmd-resize",
"name": "resize",
"icon": "📏🖥️",
"what": "The resize command adjusts the terminal window size and updates the environment variables accordingly.",
"examples": [
{
"label": "Example 1",
"code": "resize",
"note": "Automatically adjusts the terminal size and updates the necessary environment variables."
},
{
"label": "Example 2",
"code": "resize -s 30 80",
"note": "Sets the terminal size to 30 rows and 80 columns."
}
],
"dyk": "Resize is like adjusting the blinds in your room, letting you control how much space you have to work with!"
},
{
"id": "cmd-restore",
"name": "restore",
"icon": "🔄💾",
"what": "The restore command is often used in the context of restoring files or system states, but its specific usage may vary based on the context or tool.",
"examples": [
{
"label": "Example 1",
"code": "restore -r my_backup.tar",
"note": "Restores files from a backup (this is a generic example; the actual command may depend on the backup tool)."
},
{
"label": "Example 2",
"code": "restore -x -f my_backup.tar",
"note": "Extracts files from my_backup.tar, restoring them to their original locations."
}
],
"dyk": "Restore is like a time machine for your files, bringing them back from the past when you need them!"
},
{
"id": "cmd-return",
"name": "return",
"icon": "🚪📊",
"what": "The return command is used in shell functions to exit the function and return a value, if specified.",
"examples": [
{
"label": "Example 1",
"code": "function my_function {\n  return 42\n}",
"note": "Exits the function and returns the status code 42."
},
{
"label": "Example 2",
"code": "return",
"note": "Exits the function without a specific return value."
}
],
"dyk": "Return is like the exit door for functions, letting you leave with a value if you choose!"
},
{
"id": "cmd-rev",
"name": "rev",
"icon": "🔄📝",
"what": "The rev command reverses the characters of each line in a file or input.",
"examples": [
{
"label": "Example 1",
"code": "rev my_file.txt",
"note": "Displays the contents of my_file.txt with each line reversed."
},
{
"label": "Example 2",
"code": "echo \"Hello\" | rev",
"note": "Outputs \"olleH\", reversing the string directly from the input."
}
],
"dyk": "Rev is like a magic mirror for text, showing you the backwards version of what you wrote!"
},
{
"id": "cmd-rm",
"name": "rm",
"icon": "🗑️⚡",
"what": "The rm command removes files or directories, deleting them from the filesystem.",
"examples": [
{
"label": "Example 1",
"code": "rm my_file.txt",
"note": "Deletes my_file.txt from the current directory."
},
{
"label": "Example 2",
"code": "rm -r my_directory/",
"note": "Recursively removes my_directory and all its contents."
}
],
"dyk": "Rm is like a digital eraser, helping you clear out unwanted files, but be careful, because it can’t be undone!",
"tags": [
[
"careful",
"There is no trash can. Deleted means gone, so double-check before you hit Enter, especially with -r."
]
]
},
{
"id": "cmd-rmdir",
"name": "rmdir",
"icon": "🗑️📁",
"what": "The rmdir command removes empty directories from the filesystem.",
"examples": [
{
"label": "Example 1",
"code": "rmdir my_empty_directory",
"note": "Deletes my_empty_directory if it is empty."
},
{
"label": "Example 2",
"code": "rmdir -p parent_dir/child_dir/",
"note": "Removes child_dir and its parent directory if both are empty."
}
],
"dyk": "Rmdir is like sweeping out empty rooms, keeping your directory structure tidy and organized!"
},
{
"id": "cmd-rsync",
"name": "rsync",
"icon": "🔄📦",
"what": "The rsync command efficiently synchronizes files and directories between two locations, either locally or over a network.",
"examples": [
{
"label": "Example 1",
"code": "rsync -av source/ destination/",
"note": "Syncs the contents of the source directory to the destination directory with verbose output."
},
{
"label": "Example 2",
"code": "rsync -avz file.txt user@remote_host:/path/to/destination/",
"note": "Transfers file.txt to a remote host while compressing the data during transfer."
}
],
"dyk": "Rsync is like a personal assistant for your files, making sure everything is in sync without duplicating effort!"
},
{
"id": "cmd-scp",
"name": "scp",
"icon": "🔐📦",
"what": "The scp command (secure copy) securely transfers files between hosts over SSH, providing encryption during the transfer.",
"examples": [
{
"label": "Example 1",
"code": "scp my_file.txt user@remote_host:/path/to/destination/",
"note": "Copies my_file.txt to the specified path on a remote host."
},
{
"label": "Example 2",
"code": "scp user@remote_host:/path/to/file.txt .",
"note": "Copies file.txt from a remote host to the current local directory."
}
],
"dyk": "SCP is like sending a secure package through the internet, ensuring your files arrive safely!"
},
{
"id": "cmd-screen",
"name": "screen",
"icon": "🖥️✨",
"what": "The screen command allows you to run multiple shell sessions within a single terminal window, enabling session management and detachment.",
"examples": [
{
"label": "Example 1",
"code": "screen",
"note": "Starts a new screen session."
},
{
"label": "Example 2",
"code": "screen -r",
"note": "Reattaches to a detached screen session."
}
],
"dyk": "Screen is like a magic window, letting you manage multiple tasks in one terminal and coming back to them later!"
},
{
"id": "cmd-sdiff",
"name": "sdiff",
"icon": "👀🔍",
"what": "The sdiff command displays the differences between two files side by side, allowing for easy comparison.",
"examples": [
{
"label": "Example 1",
"code": "sdiff file1.txt file2.txt",
"note": "Shows the differences between file1.txt and file2.txt side by side."
},
{
"label": "Example 2",
"code": "sdiff -o merged.txt file1.txt file2.txt",
"note": "Merges the differences from both files into a new file called merged.txt."
}
],
"dyk": "Sdiff is like having a comparison chart for your text files, making it easy to spot the differences!"
},
{
"id": "cmd-sed",
"name": "sed",
"icon": "🧙‍♂️📝",
"what": "The sed command (stream editor) edits text in a file or input stream, allowing for complex text transformations and substitutions.",
"examples": [
{
"label": "Example 1",
"code": "sed 's/old/new/g' my_file.txt",
"note": "Replaces all occurrences of \"old\" with \"new\" in my_file.txt and prints the result."
},
{
"label": "Example 2",
"code": "sed -i 's/foo/bar/g' my_file.txt",
"note": "Edits my_file.txt in place, replacing \"foo\" with \"bar\" directly in the file."
}
],
"dyk": "Sed is like a powerful text wizard, allowing you to transform your text files with just a few commands!"
},
{
"id": "cmd-select",
"name": "select",
"icon": "📋🎯",
"what": "The select command is used in shell scripts to create a simple menu for user input, allowing users to choose from a list of options.",
"examples": [
{
"label": "Example 1",
"code": "select option in \"Option 1\" \"Option 2\" \"Quit\"; do\n  echo \"You chose $option\"\n  break\ndone",
"note": "Displays a menu and echoes the chosen option."
},
{
"label": "Example 2",
"code": "select fruit in \"Apple\" \"Banana\" \"Cherry\"; do\n  echo \"You selected $fruit\"\n  break\ndone",
"note": "Creates a menu for selecting a fruit and prints the selection."
}
],
"dyk": "Select is like hosting a menu for your scripts, making it easy for users to choose what they want!"
},
{
"id": "cmd-seq",
"name": "seq",
"icon": "🔢📊",
"what": "The seq command generates a sequence of numbers, making it easy to create lists in scripts.",
"examples": [
{
"label": "Example 1",
"code": "seq 1 5",
"note": "Outputs the numbers 1 to 5, each on a new line."
},
{
"label": "Example 2",
"code": "seq 2 2 10",
"note": "Outputs the even numbers from 2 to 10: 2, 4, 6, 8, 10."
}
],
"dyk": "Seq is like a number generator, helping you create lists quickly and efficiently!"
},
{
"id": "cmd-set",
"name": "set",
"icon": "⚙️🎛️",
"what": "The set command is used to set or unset shell options and positional parameters in the current shell session.",
"examples": [
{
"label": "Example 1",
"code": "set -o noclobber",
"note": "Prevents overwriting files when redirecting output."
},
{
"label": "Example 2",
"code": "set -- value1 value2 value3",
"note": "Sets the positional parameters to value1, value2, and value3."
}
],
"dyk": "Set is like a control panel for your shell, allowing you to adjust how it behaves and manage parameters!"
},
{
"id": "cmd-sftp",
"name": "sftp",
"icon": "🔐📁",
"what": "The sftp command (Secure File Transfer Protocol) securely transfers files over SSH, providing an interactive file transfer session.",
"examples": [
{
"label": "Example 1",
"code": "sftp user@remote_host",
"note": "Opens an SFTP session with the specified remote host."
},
{
"label": "Example 2",
"code": "put local_file.txt",
"note": "Uploads local_file.txt to the current directory on the remote server during the SFTP session."
}
],
"dyk": "SFTP is like a secure courier service for your files, ensuring they get to their destination safely!"
},
{
"id": "cmd-shift",
"name": "shift",
"icon": "⬅️🔄",
"what": "The shift command shifts the positional parameters to the left, effectively discarding the first parameter and renumbering the others.",
"examples": [
{
"label": "Example 1",
"code": "set -- one two three",
"note": "Sets the positional parameters to \"one\", \"two\", and \"three\"."
},
{
"label": "Example 2",
"code": "shift",
"note": "After this command, the positional parameters become \"two\" and \"three\"."
}
],
"dyk": "Shift is like a revolving door for parameters, letting you move to the next one while leaving the first behind!"
},
{
"id": "cmd-shopt",
"name": "shopt",
"icon": "⚙️🎛️",
"what": "The shopt command allows you to set and unset various shell options in bash, customizing the shell environment.",
"examples": [
{
"label": "Example 1",
"code": "shopt -s histappend",
"note": "Enables appending to the history file instead of overwriting it."
},
{
"label": "Example 2",
"code": "shopt -p",
"note": "Displays all current shell options and their statuses."
}
],
"dyk": "Shopt is like a customization toolkit for your bash shell, letting you tweak settings to your liking!"
},
{
"id": "cmd-shutdown",
"name": "shutdown",
"icon": "🔌💤",
"what": "The shutdown command safely shuts down or reboots the system, allowing processes to complete and users to log out.",
"examples": [
{
"label": "Example 1",
"code": "shutdown now",
"note": "Immediately shuts down the system."
},
{
"label": "Example 2",
"code": "shutdown -r +5",
"note": "Schedules a reboot in 5 minutes."
}
],
"dyk": "Shutdown is like a gentle goodnight for your computer, ensuring everything wraps up before it goes to sleep!",
"tags": [
[
"careful",
"Save your work first. Everyone logged in gets kicked off too."
]
]
},
{
"id": "cmd-sleep",
"name": "sleep",
"icon": "😴⏰",
"what": "The sleep command pauses execution for a specified amount of time, allowing you to delay actions in scripts.",
"examples": [
{
"label": "Example 1",
"code": "sleep 5",
"note": "Pauses the script for 5 seconds."
},
{
"label": "Example 2",
"code": "sleep 0.5",
"note": "Pauses for half a second, useful for creating short delays."
}
],
"dyk": "Sleep is like hitting the snooze button in your scripts, giving you a moment before the next command runs!"
},
{
"id": "cmd-sort",
"name": "sort",
"icon": "📊📋",
"what": "The sort command arranges lines of text files in a specified order (alphabetical, numerical, etc.).",
"examples": [
{
"label": "Example 1",
"code": "sort my_file.txt",
"note": "Sorts the lines in my_file.txt in alphabetical order."
},
{
"label": "Example 2",
"code": "sort -n numbers.txt",
"note": "Sorts the lines in numbers.txt in numerical order."
}
],
"dyk": "Sort helps you organize your text files, making it easy to find what you're looking for, like tidying up your desk!"
},
{
"id": "cmd-source",
"name": "source",
"icon": "📚⚡",
"what": "The source command executes commands from a file in the current shell context, allowing you to load functions and variables.",
"examples": [
{
"label": "Example 1",
"code": "source my_script.sh",
"note": "Executes the commands in my_script.sh within the current shell session."
},
{
"label": "Example 2",
"code": ". my_script.sh",
"note": "An alternative syntax for the source command, achieving the same result."
}
],
"dyk": "Source is like opening a book and reading from it in real-time, bringing in new knowledge directly into your session!"
},
{
"id": "cmd-split",
"name": "split",
"icon": "✂️📄",
"what": "The split command divides a file into smaller pieces, allowing you to manage large files more easily.",
"examples": [
{
"label": "Example 1",
"code": "split my_large_file.txt",
"note": "Splits my_large_file.txt into smaller files named xaa, xab, and so on."
},
{
"label": "Example 2",
"code": "split -l 100 my_large_file.txt part_",
"note": "Splits my_large_file.txt into files with 100 lines each, naming them part_aa, part_ab, etc."
}
],
"dyk": "Split is like slicing a cake into manageable pieces, making it easier to serve and share!"
},
{
"id": "cmd-ssh",
"name": "ssh",
"icon": "🔐🌐",
"what": "The ssh command (Secure Shell) allows you to securely connect to a remote machine over a network, providing a command-line interface.",
"examples": [
{
"label": "Example 1",
"code": "ssh user@remote_host",
"note": "Establishes a secure connection to the remote host as the specified user."
},
{
"label": "Example 2",
"code": "ssh -p 2222 user@remote_host",
"note": "Connects to the remote host using port 2222."
}
],
"dyk": "SSH is like a secure tunnel for your data, ensuring safe travel between your local machine and a remote server!"
},
{
"id": "cmd-stat",
"name": "stat",
"icon": "📊🔍",
"what": "The stat command displays detailed information about a file or filesystem, including its size, permissions, and timestamps.",
"examples": [
{
"label": "Example 1",
"code": "stat my_file.txt",
"note": "Shows detailed statistics about my_file.txt, including size and last modified time."
},
{
"label": "Example 2",
"code": "stat /path/to/directory/",
"note": "Displays information about the specified directory."
}
],
"dyk": "Stat is like checking the vital signs of a file, revealing its health and history!"
},
{
"id": "cmd-strace",
"name": "strace",
"icon": "🕵️‍♂️📹",
"what": "The strace command traces system calls made by a program, providing insight into how it interacts with the operating system.",
"examples": [
{
"label": "Example 1",
"code": "strace my_program",
"note": "Runs my_program while tracing all system calls it makes."
},
{
"label": "Example 2",
"code": "strace -o output.txt my_program",
"note": "Saves the trace output to output.txt instead of displaying it on the terminal."
}
],
"dyk": "Strace is like a security camera for your programs, watching their every move and revealing what they’re doing behind the scenes!"
},
{
"id": "cmd-su",
"name": "su",
"icon": "👤🔄",
"what": "The su command (substitute user) allows you to switch to another user account in the current session, often used to gain administrative privileges.",
"examples": [
{
"label": "Example 1",
"code": "su",
"note": "Prompts for the root password and switches to the root user."
},
{
"label": "Example 2",
"code": "su username",
"note": "Switches to the specified user account (username), prompting for that user’s password."
}
],
"dyk": "Su is like changing your outfit to fit in with a different crowd, allowing you to take on new roles in your system!",
"tags": [
[
"careful",
"You become another user (often root). Type exit when you are done so you are not running around as root."
]
]
},
{
"id": "cmd-sudo",
"name": "sudo",
"icon": "👑⚡",
"what": "The sudo command (superuser do) allows permitted users to execute commands as the superuser or another user, providing elevated privileges temporarily.",
"examples": [
{
"label": "Example 1",
"code": "sudo apt update",
"note": "Runs the apt update command with superuser privileges to refresh package information."
},
{
"label": "Example 2",
"code": "sudo nano /etc/hosts",
"note": "Executes the command to remove an important directory with superuser privileges (be careful with this!)."
}
],
"dyk": "Sudo is like a VIP pass for your terminal, granting you special access to perform tasks that require higher privileges!",
"tags": [
[
"careful",
"sudo gives a command full power over your system. Only use it when you know what the command does."
]
]
},
{
"id": "cmd-sum",
"name": "sum",
"icon": "🔢👆",
"what": "The sum command calculates and displays the checksum (a form of data integrity check) of a file, providing a way to verify its contents.",
"examples": [
{
"label": "Example 1",
"code": "sum my_file.txt",
"note": "Outputs the checksum and the byte count of my_file.txt."
},
{
"label": "Example 2",
"code": "sum file1.txt file2.txt",
"note": "Displays the checksums and byte counts for both file1.txt and file2.txt."
}
],
"dyk": "Sum is like a digital fingerprint for your files, helping you ensure their integrity over time!"
},
{
"id": "cmd-suspend",
"name": "suspend",
"icon": "⏸️💤",
"what": "The suspend command is used in job control to suspend the current foreground process, typically in a shell session.",
"examples": [
{
"label": "Example 1",
"code": "suspend",
"note": "Suspends the current shell session (works in some shells, like bash)."
},
{
"label": "Example 2",
"code": "Ctrl + Z",
"note": "An alternative way to suspend the current process in the terminal."
}
],
"dyk": "Suspend is like hitting the pause button on your process, letting you take a break and come back to it later!"
},
{
"id": "cmd-sync",
"name": "sync",
"icon": "💾🔄",
"what": "The sync command flushes filesystem buffers, ensuring that all data is written to disk, which helps prevent data loss.",
"examples": [
{
"label": "Example 1",
"code": "sync",
"note": "Forces the system to write all buffered data to the disk."
},
{
"label": "Example 2",
"code": "sync /path/to/directory",
"note": "Syncs the specified directory to ensure all changes are saved."
}
],
"dyk": "Sync is like checking your work before leaving the office, making sure everything is properly saved!"
},
{
"id": "cmd-tail",
"name": "tail",
"icon": "👀📜",
"what": "The tail command displays the last few lines of a file, making it useful for monitoring log files and other outputs.",
"examples": [
{
"label": "Example 1",
"code": "tail my_log.txt",
"note": "Shows the last 10 lines of my_log.txt by default."
},
{
"label": "Example 2",
"code": "tail -f my_log.txt",
"note": "Continuously monitors my_log.txt, displaying new lines as they are added."
}
],
"dyk": "Tail is like peeking at the end of a book, letting you catch the latest updates without reading everything in between!"
},
{
"id": "cmd-tar",
"name": "tar",
"icon": "📦🧳",
"what": "The tar command is used to create, extract, and manipulate archive files, typically used for packaging multiple files into a single archive.",
"examples": [
{
"label": "Example 1",
"code": "tar -cvf my_archive.tar my_directory/",
"note": "Creates a new tar archive called my_archive.tar containing the contents of my_directory/."
},
{
"label": "Example 2",
"code": "tar -xvf my_archive.tar",
"note": "Extracts the contents of my_archive.tar into the current directory."
}
],
"dyk": "Tar is like a suitcase for your files, allowing you to pack them up neatly for transport or storage!"
},
{
"id": "cmd-tee",
"name": "tee",
"icon": "🔀👀",
"what": "The tee command reads from standard input and writes to standard output and one or more files, allowing you to view and save output simultaneously.",
"examples": [
{
"label": "Example 1",
"code": "echo \"Hello, World!\" | tee output.txt",
"note": "Displays \"Hello, World!\" in the terminal and saves it to output.txt."
},
{
"label": "Example 2",
"code": "cat my_file.txt | tee -a output.txt",
"note": "Appends the contents of my_file.txt to output.txt while also displaying it."
}
],
"dyk": "Tee is like a dual-purpose tool, letting you see your output while also saving it for later!"
},
{
"id": "cmd-test",
"name": "test",
"icon": "✅❓",
"what": "The test command evaluates conditional expressions and returns a true or false status based on the evaluation.",
"examples": [
{
"label": "Example 1",
"code": "test -f my_file.txt",
"note": "Checks if my_file.txt exists and is a regular file, returning true if it does."
},
{
"label": "Example 2",
"code": "if test -d my_directory; then echo \"Directory exists\"; fi",
"note": "Checks if my_directory exists and prints a message if it does."
}
],
"dyk": "Test is like a decision-maker for your scripts, helping you determine the path forward based on conditions!"
},
{
"id": "cmd-time",
"name": "time",
"icon": "⏱️📊",
"what": "The time command measures how long a command takes to execute, reporting the real, user, and system time used.",
"examples": [
{
"label": "Example 1",
"code": "time ls",
"note": "Displays how long it takes to execute the ls command."
},
{
"label": "Example 2",
"code": "time sleep 5",
"note": "Reports the time taken to execute the sleep command for 5 seconds."
}
],
"dyk": "Time is like a stopwatch for your commands, helping you measure their performance!"
},
{
"id": "cmd-times",
"name": "times",
"icon": "📊⏰",
"what": "The times command displays the accumulated user and system times for the current shell and its child processes.",
"examples": [
{
"label": "Example 1",
"code": "times",
"note": "Outputs the total user and system time spent by the current shell session."
},
{
"label": "Example 2",
"code": "# (run some commands)\ntimes",
"note": "Shows the total times after running several commands."
}
],
"dyk": "Times gives you a behind-the-scenes look at how much CPU time your shell is using, like a fitness tracker for your processes!"
},
{
"id": "cmd-top",
"name": "top",
"icon": "🏆📊",
"what": "The top command provides a dynamic, real-time view of system processes, displaying their resource usage.",
"examples": [
{
"label": "Example 1",
"code": "top",
"note": "Launches an interactive display of currently running processes and their resource usage."
},
{
"label": "Example 2",
"code": "top -u username",
"note": "Displays only the processes running for the specified user (username)."
}
],
"dyk": "Top is like a live scoreboard for your system, showing which processes are winning the resource race!"
},
{
"id": "cmd-touch",
"name": "touch",
"icon": "👆📄",
"what": "The touch command updates the timestamp of a file or creates a new empty file if it doesn't exist.",
"examples": [
{
"label": "Example 1",
"code": "touch my_file.txt",
"note": "Creates an empty file named my_file.txt or updates its modification time if it already exists."
},
{
"label": "Example 2",
"code": "touch -d \"2023-01-01\" my_file.txt",
"note": "Sets the modification date of my_file.txt to January 1, 2023."
}
],
"dyk": "Touch is like a time traveler for your files, allowing you to adjust their timestamps or create new ones on the fly!"
},
{
"id": "cmd-traceroute",
"name": "traceroute",
"icon": "🗺️📡",
"what": "The traceroute command shows the path packets take from your machine to a specified destination, detailing each hop along the way.",
"examples": [
{
"label": "Example 1",
"code": "traceroute example.com",
"note": "Displays the route taken to reach example.com, showing each hop and its response time."
},
{
"label": "Example 2",
"code": "traceroute -m 15 example.com",
"note": "Limits the maximum number of hops to 15 when tracing the route."
}
],
"dyk": "Traceroute is like a map for your data packets, helping you see how they travel through the network!"
},
{
"id": "cmd-trap",
"name": "trap",
"icon": "🪤🛡️",
"what": "The trap command allows you to specify commands to be executed when the shell receives specific signals, useful for handling cleanup tasks.",
"examples": [
{
"label": "Example 1",
"code": "trap 'echo \"Script interrupted\"; exit' SIGINT",
"note": "Executes the echo command and exits when the script receives a SIGINT signal (like Ctrl+C)."
},
{
"label": "Example 2",
"code": "trap 'rm -f temp_file' EXIT",
"note": "Cleans up temp_file upon normal exit of the script."
}
],
"dyk": "Trap is like a safety net for your scripts, ensuring that necessary cleanup actions are taken when things go awry!"
},
{
"id": "cmd-true",
"name": "true",
"icon": "✅💯",
"what": "The true command does nothing and always returns a successful exit status (0), often used in scripts and conditionals.",
"examples": [
{
"label": "Example 1",
"code": "true",
"note": "Simply returns a success status (0)."
},
{
"label": "Example 2",
"code": "if true; then echo \"This will always run\"; fi",
"note": "Executes the echo command because true always returns success."
}
],
"dyk": "True is like a reliable friend, always there to say \"yes\" in your scripts, ensuring things run smoothly!"
},
{
"id": "cmd-tsort",
"name": "tsort",
"icon": "🧩📊",
"what": "The tsort command sorts lines of text based on their relationships, often used for topological sorting.",
"examples": [
{
"label": "Example 1",
"code": "tsort input.txt",
"note": "Takes the relationships defined in input.txt and sorts them in a topological order."
},
{
"label": "Example 2",
"code": "echo -e \"A\\nB\\nC\" | tsort",
"note": "Sorts the lines \"A\", \"B\", and \"C\" in topological order (though for independent lines, the output is the same)."
}
],
"dyk": "Tsort is like a puzzle solver for dependencies, helping you arrange items based on their relationships!"
},
{
"id": "cmd-tty",
"name": "tty",
"icon": "📺🏷️",
"what": "The tty command displays the file name of the terminal connected to standard input, showing which terminal you're using.",
"examples": [
{
"label": "Example 1",
"code": "tty",
"note": "Outputs the name of the terminal device, like /dev/pts/0."
},
{
"label": "Example 2",
"code": "# (run tty in a terminal)\ntty",
"note": "Shows the connected terminal's name."
}
],
"dyk": "Tty is like a name tag for your terminal session, telling you exactly which terminal you’re working in!"
},
{
"id": "cmd-type",
"name": "type",
"icon": "🔍🕵️‍♂️",
"what": "The type command displays information about how a command would be interpreted by the shell, indicating if it's a built-in command, an alias, or an external command.",
"examples": [
{
"label": "Example 1",
"code": "type ls",
"note": "Shows whether ls is a shell built-in, an alias, or an external command."
},
{
"label": "Example 2",
"code": "type -a echo",
"note": "Displays all instances of the echo command (including aliases and built-ins)."
}
],
"dyk": "Type is like a detective for commands, revealing their true nature and origin!"
},
{
"id": "cmd-typeset",
"name": "typeset",
"icon": "🏷️⚰️",
"what": "Sets up a variable with special rules, like \"numbers only\" or \"can't be changed.\"",
"examples": [
{
"label": "Example 1",
"code": "typeset -i num=5",
"note": "Makes num a number-only variable."
},
{
"label": "Example 2",
"code": "typeset -r NAME=\"Queen\"",
"note": "Makes NAME read-only, so it can't be changed later."
}
],
"dyk": "typeset came from the Korn shell (ksh), and bash kept it so old scripts still work.",
"tags": [
[
"fossil",
"Old name. Bash uses declare now, and it does the exact same thing."
]
]
},
{
"id": "cmd-ulimit",
"name": "ulimit",
"icon": "🚧⚖️",
"what": "The ulimit command sets or displays user process resource limits, helping to manage system resources.",
"examples": [
{
"label": "Example 1",
"code": "ulimit -n",
"note": "Displays the current limit on the number of open file descriptors."
},
{
"label": "Example 2",
"code": "ulimit -u 100",
"note": "Sets the maximum number of user processes to 100."
}
],
"dyk": "Ulimit is like a safety net for your system, preventing users from consuming too many resources!"
},
{
"id": "cmd-umask",
"name": "umask",
"icon": "🔐👗",
"what": "The umask command sets the default file creation permissions for new files and directories.",
"examples": [
{
"label": "Example 1",
"code": "umask",
"note": "Displays the current umask value."
},
{
"label": "Example 2",
"code": "umask 022",
"note": "Sets the default permissions for new files to be readable and writable by the owner, and readable by others."
}
],
"dyk": "Umask is like the default outfit for new files, determining what permissions they wear from the start!"
},
{
"id": "cmd-umount",
"name": "umount",
"icon": "🚪🔓",
"what": "The umount command unmounts a mounted filesystem, making it inaccessible from the file system hierarchy.",
"examples": [
{
"label": "Example 1",
"code": "umount /mnt/my_drive",
"note": "Unmounts the filesystem mounted at /mnt/my_drive."
},
{
"label": "Example 2",
"code": "umount -a",
"note": "Unmounts all filesystems mentioned in /etc/mtab."
}
],
"dyk": "Umount is like closing the door to a room, ensuring no one can access it until it’s opened again!"
},
{
"id": "cmd-unalias",
"name": "unalias",
"icon": "🗑️🏷️",
"what": "The unalias command removes a previously defined alias from the shell, allowing you to revert to the default behavior.",
"examples": [
{
"label": "Example 1",
"code": "unalias myalias",
"note": "Removes the alias named myalias, restoring the original command functionality."
},
{
"label": "Example 2",
"code": "unalias -a",
"note": "Removes all defined aliases in the current shell session."
}
],
"dyk": "Unalias is like erasing a shortcut on your desktop, letting you go back to using the original command!"
},
{
"id": "cmd-uname",
"name": "uname",
"icon": "🆔💻",
"what": "The uname command displays system information, such as the operating system name, kernel version, and hardware details.",
"examples": [
{
"label": "Example 1",
"code": "uname",
"note": "Outputs the name of the operating system (e.g., Linux)."
},
{
"label": "Example 2",
"code": "uname -a",
"note": "Displays all available system information, including the kernel version and system architecture."
}
],
"dyk": "Uname is like a personal identification card for your system, revealing its name and details!"
},
{
"id": "cmd-unexpand",
"name": "unexpand",
"icon": "📏⬅️",
"what": "The unexpand command converts spaces in a file back to tabs, which can be useful for formatting text.",
"examples": [
{
"label": "Example 1",
"code": "unexpand my_file.txt",
"note": "Converts spaces to tabs in my_file.txt and outputs the result."
},
{
"label": "Example 2",
"code": "unexpand -t 4 my_file.txt",
"note": "Converts spaces to tabs, assuming a tab stop of 4 spaces."
}
],
"dyk": "Unexpand is like turning back time to when your text was originally formatted, making it easier to read!"
},
{
"id": "cmd-uniq",
"name": "uniq",
"icon": "🎯📋",
"what": "The uniq command filters out duplicate lines from a sorted file, displaying only unique lines.",
"examples": [
{
"label": "Example 1",
"code": "uniq my_sorted_file.txt",
"note": "Outputs only the unique lines from my_sorted_file.txt, assuming the file is sorted."
},
{
"label": "Example 2",
"code": "uniq -c my_sorted_file.txt",
"note": "Displays the unique lines alongside their counts, indicating how many times each line appeared."
}
],
"dyk": "Uniq is like a quality control inspector for text files, ensuring that duplicates don’t sneak through!"
},
{
"id": "cmd-units",
"name": "units",
"icon": "🔢⚖️",
"what": "The units command converts between different units of measurement, allowing for easy calculations.",
"examples": [
{
"label": "Example 1",
"code": "units \"5 km to miles\"",
"note": "Converts 5 kilometers to miles and displays the result."
},
{
"label": "Example 2",
"code": "units -q",
"note": "Enters an interactive mode where you can enter conversion queries."
}
],
"dyk": "Units is like a calculator for measurements, letting you convert between different units effortlessly!"
},
{
"id": "cmd-unix2dos",
"name": "unix2dos",
"icon": "🐧➡️🪟",
"what": "The unix2dos command converts text files from Unix line endings (LF) to DOS/Windows line endings (CRLF).",
"examples": [
{
"label": "Example 1",
"code": "unix2dos my_file.txt",
"note": "Converts the line endings of my_file.txt to DOS format."
},
{
"label": "Example 2",
"code": "unix2dos -o my_file.txt",
"note": "Converts the file while preserving the original file's owner (if applicable)."
}
],
"dyk": "Unix2dos is like a translator for file formats, making sure your text files work seamlessly across different operating systems!"
},
{
"id": "cmd-unrar",
"name": "unrar",
"icon": "📦🔓",
"what": "The unrar command extracts files from RAR archives, allowing you to decompress and access the contents.",
"examples": [
{
"label": "Example 1",
"code": "unrar x my_archive.rar",
"note": "Extracts the contents of my_archive.rar into the current directory."
},
{
"label": "Example 2",
"code": "unrar e my_archive.rar",
"note": "Extracts the files from my_archive.rar without recreating directory structure."
}
],
"dyk": "Unrar is like opening a treasure chest, letting you access the valuable contents inside your RAR archives!"
},
{
"id": "cmd-unset",
"name": "unset",
"icon": "",
"what": "The unset command removes a variable or function from the shell environment, effectively deleting it.",
"examples": [
{
"label": "Example 1",
"code": "unset my_variable",
"note": "Removes the variable named my_variable from the environment."
},
{
"label": "Example 2",
"code": "unset -f my_function",
"note": "Deletes the function named my_function, making it unavailable for future use."
}
],
"dyk": "Unset is like cleaning out your closet, getting rid of things you no longer need!"
},
{
"id": "cmd-unshar",
"name": "unshar",
"icon": "",
"what": "The unshar command extracts files from a shell archive created with the shar command, restoring them to their original state.",
"examples": [
{
"label": "Example 1",
"code": "unshar my_archive.sh",
"note": "Extracts the contents of my_archive.sh, which is a shell archive."
},
{
"label": "Example 2",
"code": "unshar < my_archive.sh",
"note": "Reads the shell archive from standard input and extracts its contents."
}
],
"dyk": "Unshar is like unwrapping a gift, revealing the files packed away in a shell archive!"
},
{
"id": "cmd-until",
"name": "until",
"icon": "",
"what": "The until command is used in shell scripts to create a loop that continues executing until a specified condition becomes true.",
"examples": [
{
"label": "Example 1",
"code": "until [ \"$count\" -eq 5 ]; do\n  echo \"Count is $count\"\n  ((count++))\ndone",
"note": "Continues to loop until the variable count equals 5."
},
{
"label": "Example 2",
"code": "until ping -c 1 example.com; do\n  echo \"Waiting for example.com...\"\ndone",
"note": "Keeps pinging example.com until it gets a successful response."
}
],
"dyk": "Until is like waiting for a green light, keeping your loop going until it’s time to stop!"
},
{
"id": "cmd-uptime",
"name": "uptime",
"icon": "",
"what": "The uptime command displays how long the system has been running, along with the number of users and system load averages.",
"examples": [
{
"label": "Example 1",
"code": "uptime",
"note": "Outputs the current time, how long the system has been up, the number of users, and the load averages."
},
{
"label": "Example 2",
"code": "uptime -p",
"note": "Displays the uptime in a more human-readable format (e.g., \"up 3 hours, 15 minutes\")."
}
],
"dyk": "Uptime is like a fitness tracker for your system, showing how long it has been running without a break!"
},
{
"id": "cmd-useradd",
"name": "useradd",
"icon": "",
"what": "The useradd command creates a new user account on the system, setting up the necessary configuration.",
"examples": [
{
"label": "Example 1",
"code": "useradd newuser",
"note": "Creates a new user account named newuser."
},
{
"label": "Example 2",
"code": "useradd -m -s /bin/bash newuser",
"note": "Creates a new user named newuser with a home directory and bash as the default shell."
}
],
"dyk": "Useradd is like welcoming a new member to your team, setting them up with everything they need to get started!"
},
{
"id": "cmd-userdel",
"name": "userdel",
"icon": "",
"what": "The userdel command removes a user account from the system, along with its associated files (if specified).",
"examples": [
{
"label": "Example 1",
"code": "userdel newuser",
"note": "Deletes the user account named newuser."
},
{
"label": "Example 2",
"code": "userdel -r newuser",
"note": "Deletes the user account and removes the home directory and mail spool for newuser."
}
],
"dyk": "Userdel is like saying goodbye to a team member, removing their access and files when they leave!"
},
{
"id": "cmd-usermod",
"name": "usermod",
"icon": "",
"what": "The usermod command modifies an existing user account, allowing changes to settings such as group memberships, home directories, and user names.",
"examples": [
{
"label": "Example 1",
"code": "usermod -aG sudo newuser",
"note": "Adds newuser to the sudo group, granting them administrative privileges."
},
{
"label": "Example 2",
"code": "usermod -l newname oldname",
"note": "Changes the username from oldname to newname."
}
],
"dyk": "Usermod is like giving a promotion or a new title to a team member, helping you adjust their role as needed!"
},
{
"id": "cmd-users",
"name": "users",
"icon": "",
"what": "The users command displays the usernames of users currently logged into the system.",
"examples": [
{
"label": "Example 1",
"code": "users",
"note": "Outputs a list of currently logged-in users, separated by spaces."
},
{
"label": "Example 2",
"code": "# (run users in a terminal)\nusers",
"note": "Shows who is logged in at that moment."
}
],
"dyk": "Users is like a roll call for your system, letting you see who’s present and active!"
},
{
"id": "cmd-uudecode",
"name": "uudecode",
"icon": "",
"what": "The uudecode command decodes files that were encoded with uuencode, restoring them to their original binary format.",
"examples": [
{
"label": "Example 1",
"code": "uudecode encoded_file.txt",
"note": "Decodes the contents of encoded_file.txt back to its original form."
},
{
"label": "Example 2",
"code": "uudecode < encoded_image.txt",
"note": "Reads from encoded_image.txt and restores the original image file."
}
],
"dyk": "Uudecode is like opening a treasure chest, revealing the original files hidden inside!"
},
{
"id": "cmd-uuencode",
"name": "uuencode",
"icon": "",
"what": "The uuencode command encodes binary files into ASCII text for transmission, often used for email attachments.",
"examples": [
{
"label": "Example 1",
"code": "uuencode my_file.txt my_file.txt",
"note": "Converts my_file.txt into a text format suitable for email."
},
{
"label": "Example 2",
"code": "uuencode image.png image.png > encoded_image.txt",
"note": "Encodes image.png and saves the output to encoded_image.txt."
}
],
"dyk": "Uuencode is like turning a file into a secret message, allowing it to be sent safely over text-based mediums!"
},
{
"id": "cmd-v",
"name": "v",
"icon": "",
"what": "The v command is often a shorthand for the vi text editor, allowing you to open files for editing.",
"examples": [
{
"label": "Example 1",
"code": "v my_file.txt",
"note": "Opens my_file.txt in the vi editor."
},
{
"label": "Example 2",
"code": "v new_script.sh",
"note": "Opens new_script.sh in the vi editor for editing."
}
],
"dyk": "V is like a quick pass to your favorite text editor, letting you jump in and start editing right away!"
},
{
"id": "cmd-vdir",
"name": "vdir",
"icon": "",
"what": "The vdir command is similar to ls -l, displaying detailed information about files and directories in a specific format.",
"examples": [
{
"label": "Example 1",
"code": "vdir",
"note": "Lists the contents of the current directory with detailed information."
},
{
"label": "Example 2",
"code": "vdir /path/to/directory",
"note": "Displays detailed information about the contents of the specified directory."
}
],
"dyk": "Vdir is like opening a detailed report for your directory, giving you insights into its contents!"
},
{
"id": "cmd-vi",
"name": "vi",
"icon": "",
"what": "The vi command opens the vi text editor, a powerful tool for editing text files in a terminal environment.",
"examples": [
{
"label": "Example 1",
"code": "vi my_file.txt",
"note": "Opens my_file.txt in the vi editor for editing."
},
{
"label": "Example 2",
"code": "vi +10 my_file.txt",
"note": "Opens my_file.txt and jumps directly to line 10."
}
],
"dyk": "Vi is like a Swiss Army knife for text editing, packed with features for efficient file manipulation!"
},
{
"id": "cmd-vmstat",
"name": "vmstat",
"icon": "",
"what": "The vmstat command reports information about system processes, memory, paging, block I/O, traps, and CPU activity.",
"examples": [
{
"label": "Example 1",
"code": "vmstat",
"note": "Displays a snapshot of system performance metrics."
},
{
"label": "Example 2",
"code": "vmstat 2 5",
"note": "Continuously reports system statistics every 2 seconds for a total of 5 iterations."
}
],
"dyk": "Vmstat is like a health monitor for your system, keeping track of performance and resource usage!"
},
{
"id": "cmd-wait",
"name": "wait",
"icon": "",
"what": "The wait command pauses the execution of a script until all background jobs have finished, allowing you to synchronize tasks.",
"examples": [
{
"label": "Example 1",
"code": "wait",
"note": "Waits for all background jobs to complete before moving on."
},
{
"label": "Example 2",
"code": "wait $!",
"note": "Waits for the specific background job with the given process ID (PID) to finish."
}
],
"dyk": "Wait is like holding your breath until the work is done, ensuring everything is complete before proceeding!"
},
{
"id": "cmd-watch",
"name": "watch",
"icon": "",
"what": "The watch command runs a specified command at regular intervals, allowing you to monitor the output in real-time.",
"examples": [
{
"label": "Example 1",
"code": "watch ls -l",
"note": "Runs the ls -l command every 2 seconds, updating the output automatically."
},
{
"label": "Example 2",
"code": "watch -n 5 df -h",
"note": "Updates the output of the df -h command every 5 seconds, showing disk space usage."
}
],
"dyk": "Watch is like having a live scoreboard, letting you keep an eye on changes as they happen!"
},
{
"id": "cmd-wc",
"name": "wc",
"icon": "",
"what": "The wc command (word count) counts lines, words, and characters in a file or input.",
"examples": [
{
"label": "Example 1",
"code": "wc my_file.txt",
"note": "Displays the line count, word count, and character count for my_file.txt."
},
{
"label": "Example 2",
"code": "wc -l my_file.txt",
"note": "Outputs only the line count for my_file.txt."
}
],
"dyk": "Wc is like a quick calculator for your text files, helping you keep track of how much content you have!"
},
{
"id": "cmd-wget",
"name": "wget",
"icon": "",
"what": "The wget command is used to download files from the web, supporting HTTP, HTTPS, and FTP protocols.",
"examples": [
{
"label": "Example 1",
"code": "wget https://example.com/file.zip",
"note": "Downloads the file.zip from the specified URL."
},
{
"label": "Example 2",
"code": "wget -r https://example.com/",
"note": "Downloads an entire website recursively, saving the structure of the site."
}
],
"dyk": "Wget is like your digital delivery service, fetching files from the internet right to your machine!"
},
{
"id": "cmd-whereis",
"name": "whereis",
"icon": "",
"what": "The whereis command locates the binary, source, and manual page files for a command, providing quick access to its resources.",
"examples": [
{
"label": "Example 1",
"code": "whereis ls",
"note": "Displays the locations of the ls command binary, source, and man page."
},
{
"label": "Example 2",
"code": "whereis python",
"note": "Shows where the Python binary and documentation are located."
}
],
"dyk": "Whereis acts like a treasure map, guiding you to all the resources related to a command!"
},
{
"id": "cmd-which",
"name": "which",
"icon": "",
"what": "The which command shows the full path of executables that would have been executed when a command is entered, helping you identify the command's location.",
"examples": [
{
"label": "Example 1",
"code": "which python",
"note": "Displays the path to the Python executable being used."
},
{
"label": "Example 2",
"code": "which gcc",
"note": "Outputs the path for the GCC compiler."
}
],
"dyk": "Which is like a sleuth for your commands, revealing the exact location of the executables you’re using!"
},
{
"id": "cmd-while",
"name": "while",
"icon": "",
"what": "The while command creates a loop that continues executing as long as a specified condition is true.",
"examples": [
{
"label": "Example 1",
"code": "while [ \"$count\" -lt 5 ]; do\n  echo \"Count is $count\"\n  ((count++))\ndone",
"note": "Loops until count reaches 5, printing the current count each time."
},
{
"label": "Example 2",
"code": "while read line; do\n  echo \"You entered: $line\"\ndone",
"note": "Continues to read and echo user input until EOF (end of file)."
}
],
"dyk": "While is like a persistent friend, sticking around as long as you need them to complete a task!"
},
{
"id": "cmd-who",
"name": "who",
"icon": "",
"what": "The who command displays a list of users currently logged into the system, along with their login details.",
"examples": [
{
"label": "Example 1",
"code": "who",
"note": "Outputs a list of all users currently logged in, showing their usernames and login times."
},
{
"label": "Example 2",
"code": "who -b",
"note": "Displays the last system boot time."
}
],
"dyk": "Who is like a guest list for your system, showing you who’s currently signed in and active!"
},
{
"id": "cmd-whoami",
"name": "whoami",
"icon": "",
"what": "The whoami command displays the username of the currently logged-in user.",
"examples": [
{
"label": "Example 1",
"code": "whoami",
"note": "Outputs the username of the user currently logged into the terminal."
},
{
"label": "Example 2",
"code": "# (run whoami in a terminal)\nwhoami",
"note": "Confirms your current user identity."
}
],
"dyk": "Whoami is like a name badge for your terminal session, reminding you of who you are while you work!"
},
{
"id": "cmd-write",
"name": "write",
"icon": "",
"what": "The write command allows you to send messages to another user’s terminal session on the same system.",
"examples": [
{
"label": "Example 1",
"code": "write username",
"note": "Starts a messaging session with the specified user, allowing you to type messages directly."
},
{
"label": "Example 2",
"code": "# (after executing write)\nHello! How are you?",
"note": "Sends the message \"Hello! How are you?\" to the other user’s terminal."
}
],
"dyk": "Write is like sending a quick note to a colleague in the same office, allowing for real-time communication!"
},
{
"id": "cmd-xargs",
"name": "xargs",
"icon": "",
"what": "The xargs command constructs and executes command lines from standard input, allowing you to pass arguments to commands based on input.",
"examples": [
{
"label": "Example 1",
"code": "echo \"file1.txt file2.txt\" | xargs rm",
"note": "Removes file1.txt and file2.txt using the rm command."
},
{
"label": "Example 2",
"code": "find . -name \"*.txt\" | xargs wc -l",
"note": "Counts the lines in all .txt files found in the current directory."
}
],
"dyk": "Xargs is like a multi-tasker, allowing you to feed multiple inputs into commands seamlessly!",
"tags": [
[
"careful",
"Pairing xargs with rm can delete a lot very fast. Test with echo first."
]
]
},
{
"id": "cmd-xdg-open",
"name": "xdg-open",
"icon": "",
"what": "The xdg-open command opens a file or URL in the user's preferred application, making it easy to view documents, images, or websites.",
"examples": [
{
"label": "Example 1",
"code": "xdg-open my_document.pdf",
"note": "Opens my_document.pdf in the default PDF viewer."
},
{
"label": "Example 2",
"code": "xdg-open https://example.com",
"note": "Opens the specified URL in the default web browser."
}
],
"dyk": "Xdg-open is like a universal remote for your files and URLs, opening them in the right apps with ease!"
},
{
"id": "cmd-xz",
"name": "xz",
"icon": "",
"what": "The xz command compresses or decompresses files using the LZMA compression algorithm, providing high compression rates.",
"examples": [
{
"label": "Example 1",
"code": "xz my_file.txt",
"note": "Compresses my_file.txt into my_file.txt.xz."
},
{
"label": "Example 2",
"code": "xz -d my_file.txt.xz",
"note": "Decompresses my_file.txt.xz back to its original form."
}
],
"dyk": "Xz is like a packing expert, squeezing files down to save space while keeping the quality intact!"
},
{
"id": "cmd-yes",
"name": "yes",
"icon": "",
"what": "The yes command outputs a string repeatedly until killed, commonly used to automate responses in scripts.",
"examples": [
{
"label": "Example 1",
"code": "yes \"I love Linux!\"",
"note": "Continuously prints \"I love Linux!\" to the terminal."
},
{
"label": "Example 2",
"code": "yes | some_command",
"note": "Automatically feeds \"yes\" as input to some_command."
}
],
"dyk": "Yes is like a cheerleader for your scripts, providing enthusiastic support without stopping!"
},
{
"id": "cmd-zip",
"name": "zip",
"icon": "",
"what": "The zip command compresses files into a ZIP archive, allowing for easier storage and transfer.",
"examples": [
{
"label": "Example 1",
"code": "zip my_archive.zip file1.txt file2.txt",
"note": "Creates a ZIP archive named my_archive.zip containing file1.txt and file2.txt."
},
{
"label": "Example 2",
"code": "zip -r my_archive.zip my_directory/",
"note": "Recursively zips all files in my_directory into my_archive.zip."
}
],
"dyk": "Zip is like putting your files in a suitcase, making them easier to carry and store!"
}
];
