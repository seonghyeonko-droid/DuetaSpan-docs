# v3_rag_28_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: So, I was wondering… when did the first Harry Potter book ac
     5.00s  agent 발화 시작: That’s a very popular question, naturally.
     5.14s  user  발화 끝
     6.99s  <ret> 발화 (turn2 첫 프레임)
     7.39s  agent 발화 시작: <ret> Let’s see if I can recall— It was first published in t
     7.59s  agent 발화 끝
     7.95s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.03s]: Harry Potter and the Philosopher's Stone was first published in the Un
    14.48s  agent 발화 끝
    14.62s  user  발화 시작: Hmm, okay, but I thought it came out in America much later. 
    18.99s  agent 발화 시작: You are absolutely correct to question that.
    19.03s  user  발화 끝
    21.21s  <ret> 발화 (turn5 첫 프레임)
    21.44s  agent 발화 시작: <ret> It’s important to distinguish— It was first published 
    21.57s  agent 발화 끝
    21.93s  ⚡SPAN 주입 [d'=0.72s / d_lead=1.61s]: Harry Potter and the Sorcerer's Stone was first published in the Unite
    28.30s  agent 발화 끝
    29.36s  user  발화 시작: September first… that’s quite a gap, isn’t it? A whole year!
    33.84s  agent 발화 시작: A significant delay, yes. Publishing schedules can be quite 
    33.98s  user  발화 끝
    37.85s  <ret> 발화 (turn8 첫 프레임)
    38.24s  agent 발화 시작: <ret> Let me explain the difference— Scholastic Corporation 
    38.37s  agent 발화 끝
    38.97s  ⚡SPAN 주입 [d'=1.12s / d_lead=2.12s]: Scholastic Corporation acquired the US rights to publish the Harry Pot
    45.88s  agent 발화 끝
    45.95s  user  발화 시작: So Scholastic had it for a year before releasing it? Why the
    50.16s  user  발화 끝
    50.61s  agent 발화 시작: There were several considerations at play, I believe.
    53.44s  <ret> 발화 (turn11 첫 프레임)
    53.51s  agent 발화 시작: <ret> They needed to prepare— Scholastic spent a year re-edi
    53.57s  agent 발화 끝
    54.08s  ⚡SPAN 주입 [d'=0.64s / d_lead=1.52s]: Scholastic spent a year re-editing and re-titling the book for the Ame
    59.95s  agent 발화 끝
    61.25s  user  발화 시작: Re-titling? What did they change the title to?
    64.79s  agent 발화 시작: It was a fairly substantial change, actually.
    64.91s  user  발화 끝
    67.02s  <ret> 발화 (turn14 첫 프레임)
    67.41s  agent 발화 시작: <ret> The American edition— The title was changed to “Harry 
    67.52s  agent 발화 끝
    67.52s  ⚡SPAN 주입 [d'=0.50s / d_lead=1.08s]: "Harry Potter and the Philosopher's Stone" was changed to "Harry Potte
    73.52s  agent 발화 끝
    73.60s  user  발화 시작: Sorcerer instead of Philosopher… that's interesting. Did the
    80.22s  user  발화 끝
    80.33s  agent 발화 시작: It was a marketing decision, primarily—
    82.16s  <ret> 발화 (turn17 첫 프레임)
    82.56s  agent 발화 시작: <ret> The publishers believed— Scholastic thought “sorcerer”
    82.69s  agent 발화 끝
    82.72s  ⚡SPAN 주입 [d'=0.56s / d_lead=1.35s]: Scholastic thought "sorcerer" would appeal more to American children t
    88.85s  agent 발화 끝
    89.47s  user  발화 시작: That makes a little sense, I guess. So, after the first book
    94.05s  user  발화 끝
    94.48s  agent 발화 시작: After the initial success—
    95.78s  <ret> 발화 (turn20 첫 프레임)
    96.09s  agent 발화 시작: <ret> The subsequent releases— Subsequent books were publish
    96.23s  agent 발화 끝
    96.28s  ⚡SPAN 주입 [d'=0.50s / d_lead=1.52s]: Subsequent books in the series were published in both the UK and US ne
   102.16s  agent 발화 끝
   102.73s  user  발화 시작: Nearly? So there were still some delays even then?
   105.37s  agent 발화 시작: There were occasional minor discrepancies—
   105.46s  user  발화 끝
   107.94s  <ret> 발화 (turn23 첫 프레임)
   108.02s  agent 발화 시작: <ret> It’s not unusual— Minor publication date differences o
   108.19s  agent 발화 끝
   108.66s  ⚡SPAN 주입 [d'=0.72s / d_lead=1.35s]: Minor publication date differences occurred due to shipping and distri
   114.32s  agent 발화 끝
   114.34s  user  발화 시작: Right, shipping makes sense. I wonder if that affected the h
   118.36s  user  발화 끝
   118.37s  agent 발화 시작: It certainly could have—
   119.38s  <ret> 발화 (turn26 첫 프레임)
   119.45s  agent 발화 시작: <ret> The anticipation was— The initial delay created signif
   119.61s  agent 발화 끝
   120.58s  ⚡SPAN 주입 [d'=1.20s / d_lead=1.40s]: The initial delay created significant anticipation and demand for the 
   126.45s  agent 발화 끝
   126.81s  user  발화 시작: But did J.K. Rowling know about all this, about the changes 
   131.96s  agent 발화 시작: Oh, absolutely—
   132.13s  user  발화 끝
   132.75s  <ret> 발화 (turn29 첫 프레임)
   133.06s  agent 발화 시작: <ret> She was certainly— J.K. Rowling was consulted on the t
   133.25s  agent 발화 끝
   133.47s  ⚡SPAN 주입 [d'=0.72s / d_lead=1.03s]: J.K. Rowling was consulted on the title change and remained involved i
   138.89s  agent 발화 끝
   139.10s  user  발화 시작: That's good to know she had some say in it. So, the Sorcerer
   146.31s  agent 발화 시작: Precisely. That’s the version that became iconic here.
   146.37s  user  발화 끝
   149.91s  <ret> 발화 (turn32 첫 프레임)
   149.99s  agent 발화 시작: <ret> It’s the edition— “Harry Potter and the Sorcerer’s Sto
   150.15s  agent 발화 끝
   150.47s  ⚡SPAN 주입 [d'=0.56s / d_lead=1.03s]: "Harry Potter and the Sorcerer's Stone" became the defining edition fo
   155.83s  agent 발화 끝
