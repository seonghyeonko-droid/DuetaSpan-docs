# v3_rag_28_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: So, I was wondering… when did the first Harry Potter book ac
     5.00s  agent 발화 시작: That’s a very popular question, naturally.
     5.14s  user  발화 끝
     6.74s  <ret> 발화 (turn2 첫 프레임)
     7.14s  agent 발화 시작: <ret> Let’s see if I can recall— It was first published in t
     7.59s  agent 발화 끝
     7.70s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.03s]: Harry Potter and the Philosopher's Stone was first published in the Un
    14.14s  user  발화 시작: Hmm, okay, but I thought it came out in America much later. 
    14.23s  agent 발화 끝
    18.55s  user  발화 끝
    18.87s  agent 발화 시작: You are absolutely correct to question that.
    20.87s  <ret> 발화 (turn5 첫 프레임)
    21.10s  agent 발화 시작: <ret> It’s important to distinguish— It was first published 
    21.45s  agent 발화 끝
    21.59s  ⚡SPAN 주입 [d'=0.72s / d_lead=1.61s]: Harry Potter and the Sorcerer's Stone was first published in the Unite
    27.96s  agent 발화 끝
    29.01s  user  발화 시작: September first… that’s quite a gap, isn’t it? A whole year!
    33.49s  agent 발화 시작: A significant delay, yes. Publishing schedules can be quite 
    33.64s  user  발화 끝
    37.26s  <ret> 발화 (turn8 첫 프레임)
    37.65s  agent 발화 시작: <ret> Let me explain the difference— Scholastic Corporation 
    38.03s  agent 발화 끝
    38.38s  ⚡SPAN 주입 [d'=1.12s / d_lead=2.12s]: Scholastic Corporation acquired the US rights to publish the Harry Pot
    45.30s  agent 발화 끝
    47.52s  user  발화 시작: So Scholastic had it for a year before releasing it? Why the
    51.73s  user  발화 끝
    52.10s  agent 발화 시작: There were several considerations at play, I believe.
    54.82s  <ret> 발화 (turn11 첫 프레임)
    54.89s  agent 발화 시작: <ret> They needed to prepare— Scholastic spent a year re-edi
    55.07s  agent 발화 끝
    55.46s  ⚡SPAN 주입 [d'=0.64s / d_lead=1.52s]: Scholastic spent a year re-editing and re-titling the book for the Ame
    61.33s  agent 발화 끝
    61.65s  user  발화 시작: Re-titling? What did they change the title to?
    65.16s  agent 발화 시작: It was a fairly substantial change, actually.
    65.30s  user  발화 끝
    67.31s  <ret> 발화 (turn14 첫 프레임)
    67.69s  agent 발화 시작: <ret> The American edition— The title was changed to “Harry 
    67.81s  ⚡SPAN 주입 [d'=0.50s / d_lead=1.08s]: "Harry Potter and the Philosopher's Stone" was changed to "Harry Potte
    67.89s  agent 발화 끝
    73.61s  user  발화 시작: Sorcerer instead of Philosopher… that's interesting. Did the
    73.80s  agent 발화 끝
    80.23s  user  발화 끝
    80.65s  agent 발화 시작: It was a marketing decision, primarily—
    82.52s  <ret> 발화 (turn17 첫 프레임)
    82.91s  agent 발화 시작: <ret> The publishers believed— Scholastic thought “sorcerer”
    83.00s  agent 발화 끝
    83.08s  ⚡SPAN 주입 [d'=0.56s / d_lead=1.35s]: Scholastic thought "sorcerer" would appeal more to American children t
    89.20s  agent 발화 끝
    89.67s  user  발화 시작: That makes a little sense, I guess. So, after the first book
    94.22s  agent 발화 시작: After the initial success—
    94.25s  user  발화 끝
    95.28s  <ret> 발화 (turn20 첫 프레임)
    95.59s  agent 발화 시작: <ret> The subsequent releases— Subsequent books were publish
    95.78s  ⚡SPAN 주입 [d'=0.50s / d_lead=1.52s]: Subsequent books in the series were published in both the UK and US ne
    95.98s  agent 발화 끝
   101.67s  agent 발화 끝
   101.96s  user  발화 시작: Nearly? So there were still some delays even then?
   104.54s  agent 발화 시작: There were occasional minor discrepancies—
   104.68s  user  발화 끝
   107.08s  <ret> 발화 (turn23 첫 프레임)
   107.16s  agent 발화 시작: <ret> It’s not unusual— Minor publication date differences o
   107.36s  agent 발화 끝
   107.80s  ⚡SPAN 주입 [d'=0.72s / d_lead=1.35s]: Minor publication date differences occurred due to shipping and distri
   113.12s  user  발화 시작: Right, shipping makes sense. I wonder if that affected the h
   113.46s  agent 발화 끝
   117.14s  user  발화 끝
   117.26s  agent 발화 시작: It certainly could have—
   118.04s  <ret> 발화 (turn26 첫 프레임)
   118.11s  agent 발화 시작: <ret> The anticipation was— The initial delay created signif
   118.50s  agent 발화 끝
   119.24s  ⚡SPAN 주입 [d'=1.20s / d_lead=1.40s]: The initial delay created significant anticipation and demand for the 
   125.05s  user  발화 시작: But did J.K. Rowling know about all this, about the changes 
   125.11s  agent 발화 끝
   130.38s  user  발화 끝
   130.58s  agent 발화 시작: Oh, absolutely—
   131.74s  <ret> 발화 (turn29 첫 프레임)
   131.87s  agent 발화 끝
   132.05s  agent 발화 시작: <ret> She was certainly— J.K. Rowling was consulted on the t
   132.46s  ⚡SPAN 주입 [d'=0.72s / d_lead=1.03s]: J.K. Rowling was consulted on the title change and remained involved i
   137.84s  user  발화 시작: That's good to know she had some say in it. So, the Sorcerer
   137.88s  agent 발화 끝
   144.99s  agent 발화 시작: Precisely. That’s the version that became iconic here.
   145.11s  user  발화 끝
   148.62s  <ret> 발화 (turn32 첫 프레임)
   148.70s  agent 발화 시작: <ret> It’s the edition— “Harry Potter and the Sorcerer’s Sto
   148.83s  agent 발화 끝
   149.18s  ⚡SPAN 주입 [d'=0.56s / d_lead=1.03s]: "Harry Potter and the Sorcerer's Stone" became the defining edition fo
   154.53s  agent 발화 끝
