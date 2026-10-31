  // ===== CUT-OFF CHECKER =====
  // bash shortens long help lines and sticks a > on the end.
  // This checks if that happened, and if so, trims off the broken tail.
  // It gives back the cleaned line, plus true/false for "was it cut?"
  function checkCut(line) {
    if (!line.endsWith('>')) return { line: line, cut: false };

    // Walk the line one character at a time and keep a pile (a "stack")
    // of every bracket that opened but has not closed yet.
    var open = [];
    var pairs = { ']': '[', '}': '{', '>': '<' };
    var body = line.slice(0, -1); // everything except that last >
    for (var i = 0; i < body.length; i++) {
      var c = body[i];
      if (c === '[' || c === '{' || c === '<') {
        open.push({ ch: c, at: i });
      } else if (pairs[c] && open.length && open[open.length - 1].ch === pairs[c]) {
        open.pop();
      }
    }

    // If the last open bracket is a <, then the final > just closes it,
    // like <file>. That is normal, not cut off.
    if (open.length && open[open.length - 1].ch === '<') {
      return { line: line, cut: false };
    }

    // It was cut off. If a bracket was left open, chop from where it opened.
    if (open.length) {
      return { line: body.slice(0, open[0].at).trim().replace(/\s+or$/, ''), cut: true };
    }
    // No open bracket: if the line stopped in the middle of a word,
    // that word is only half there, so drop it.
    // (If it stopped right after a ] or } the last piece is whole, so keep it.)
    if (!/[\s\]}]$/.test(body)) {
      body = body.replace(/\S+$/, '');
    }
    // A lonely "or" at the end means a second way to type it got cut. Drop it.
    body = body.trim().replace(/\s+or$/, '');
    return { line: body.trim(), cut: true };
  }

  function decode() {
    var line = document.getElementById('helpLine').value.trim();
    var out = document.getElementById('decoded');
    out.innerHTML = '';
    if (!line) return;

    // Check if bash chopped the end off this line
    var checked = checkCut(line);
    line = checked.line;
    if (checked.cut) {
      var name = line.split(/\s+/)[0] || 'NAME';
      var note = document.createElement('div');
      note.className = 'piece';
      note.innerHTML = '<span class="icon"></span><code></code><span class="why"></span>';
      note.querySelector('.icon').textContent = '✂️';
      note.querySelector('code').textContent = 'Cut off!';
      note.querySelector('.why').textContent =
        'bash ran out of room and chopped the end off this line. The > at the end is NOT something to type. ' +
        'Here is the part that made it. To see the whole line, type: help ' + name;
      out.appendChild(note);
    }
    if (!line) return;

    // Keeps [ ... ], < ... >, and { ... } together as one piece
    var pieces = line.match(/\[[^\]]*\](\.\.\.)?|<[^>]*>(\.\.\.)?|\{[^}]*\}(\.\.\.)?|\S+/g);

    pieces.forEach(function (piece, i) {
      var info = explainPiece(piece, i === 0);
      var row = document.createElement('div');
      row.className = 'piece';
      row.innerHTML = '<span class="icon"></span><code></code><span class="why"></span>';
      row.querySelector('.icon').textContent = info[0];
      row.querySelector('code').textContent = info[1];
      row.querySelector('.why').textContent = info[2];
      out.appendChild(row);
    });
  }
