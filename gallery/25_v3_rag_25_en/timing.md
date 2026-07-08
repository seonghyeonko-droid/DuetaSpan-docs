# v3_rag_25_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: I’m trying to remember who the Duke football coach was when 
     6.34s  user  발화 끝
     6.55s  agent 발화 시작: Yes, Duke has played at Wake Forest’s Wallace Wade Stadium s
    11.95s  <ret> 발화 (turn2 첫 프레임)
    12.03s  agent 발화 시작: <ret> Let’s pinpoint the coach during that period… David Cut
    12.20s  agent 발화 끝
    13.31s  ⚡SPAN 주입 [d'=1.36s / d_lead=2.90s]: David Cutcliffe was the head coach of the Duke Blue Devils football te
    19.33s  user  발화 시작: Hmm, Cutcliffe… I thought it was someone else. Did he win an
    19.50s  agent 발화 끝
    23.74s  agent 발화 시작: Many coaches receive recognition for their work, of course.
    23.88s  user  발화 끝
    26.80s  <ret> 발화 (turn5 첫 프레임)
    27.12s  agent 발화 시작: <ret> Regarding accolades, let's look into his awards… David
    27.17s  agent 발화 끝
    27.92s  ⚡SPAN 주입 [d'=1.12s / d_lead=3.09s]: David Cutcliffe won the ACC Coach of the Year award in 2013 and 2014.
    30.00s  user  발화 시작: Yeah.
    30.44s  user  발화 끝
    36.37s  user  발화 시작: Okay, that checks out. But did he win *national* Coach of th
    36.39s  agent 발화 끝
    41.83s  user  발화 끝
    42.12s  agent 발화 시작: National recognition is quite different from a conference aw
    45.91s  <ret> 발화 (turn9 첫 프레임)
    46.23s  agent 발화 시작: <ret> Let me check for national Coach of the Year honors… Da
    46.38s  agent 발화 끝
    47.19s  ⚡SPAN 주입 [d'=1.28s / d_lead=3.29s]: David Cutcliffe was named the National Coach of the Year by the Paul W
    55.29s  user  발화 시작: Just the one, then? That seems… low for a coach who lasted t
    55.45s  agent 발화 끝
    60.91s  agent 발화 시작: Longevity doesn’t always equate to numerous national awards,
    60.99s  user  발화 끝
    65.09s  <ret> 발화 (turn12 첫 프레임)
    65.45s  agent 발화 끝
    65.50s  agent 발화 시작: <ret> I can confirm details of other awards, if you’d like… 
    66.94s  ⚡SPAN 주입 [d'=1.84s / d_lead=3.25s]: David Cutcliffe was honored as the Home Depot National Coach of the Ye
    73.61s  agent 발화 끝
    74.05s  user  발화 시작: So, both big ones in 2013? That's a bit concentrated.
    78.44s  agent 발화 시작: Sometimes a coach has a particularly outstanding year, clear
    78.58s  user  발화 끝
    81.62s  <ret> 발화 (turn15 첫 프레임)
    81.86s  agent 발화 시작: <ret> I can confirm his overall record at Duke, if you wish…
    82.00s  agent 발화 끝
    83.62s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.12s]: During his tenure, David Cutcliffe achieved a 79–93 win-loss record wi
    90.11s  agent 발화 끝
    90.23s  user  발화 시작: Seventy-nine and ninety-three… not exactly stellar, is it?
    95.25s  agent 발화 시작: Building a program takes time and patience, as I well know.
    95.32s  user  발화 끝
    98.53s  agent 발화 끝
    99.47s  user  발화 시작: I suppose. Still, thanks for clarifying things.
   102.98s  user  발화 끝
