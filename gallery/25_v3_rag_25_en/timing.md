# v3_rag_25_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: I’m trying to remember who the Duke football coach was when 
     6.34s  user  발화 끝
     6.55s  agent 발화 시작: Yes, Duke has played at Wake Forest’s Wallace Wade Stadium s
    12.06s  agent 발화 시작: <ret> Let’s pinpoint the coach during that period… David Cut
    12.06s  <ret> 발화 (turn2 첫 프레임)
    12.20s  agent 발화 끝
    13.02s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.90s]: David Cutcliffe was the head coach of the Duke Blue Devils football te
    19.53s  agent 발화 끝
    20.21s  user  발화 시작: Hmm, Cutcliffe… I thought it was someone else. Did he win an
    24.74s  agent 발화 시작: Many coaches receive recognition for their work, of course.
    24.75s  user  발화 끝
    28.16s  agent 발화 끝
    28.20s  agent 발화 시작: <ret> Regarding accolades, let's look into his awards… David
    28.20s  <ret> 발화 (turn5 첫 프레임)
    29.56s  ⚡SPAN 주입 [d'=1.36s / d_lead=3.09s]: David Cutcliffe won the ACC Coach of the Year award in 2013 and 2014.
    31.09s  user  발화 시작: Yeah.
    31.53s  user  발화 끝
    37.33s  user  발화 시작: Okay, that checks out. But did he win *national* Coach of th
    37.47s  agent 발화 끝
    42.78s  agent 발화 시작: National recognition is quite different from a conference aw
    42.79s  user  발화 끝
    46.92s  agent 발화 시작: <ret> Let me check for national Coach of the Year honors… Da
    46.92s  <ret> 발화 (turn9 첫 프레임)
    47.04s  agent 발화 끝
    49.08s  ⚡SPAN 주입 [d'=2.16s / d_lead=3.29s]: David Cutcliffe was named the National Coach of the Year by the Paul W
    55.99s  user  발화 시작: Just the one, then? That seems… low for a coach who lasted t
    56.15s  agent 발화 끝
    61.58s  agent 발화 시작: Longevity doesn’t always equate to numerous national awards,
    61.69s  user  발화 끝
    66.12s  agent 발화 끝
    66.13s  agent 발화 시작: <ret> I can confirm details of other awards, if you’d like… 
    66.13s  <ret> 발화 (turn12 첫 프레임)
    67.49s  ⚡SPAN 주입 [d'=1.36s / d_lead=3.25s]: David Cutcliffe was honored as the Home Depot National Coach of the Ye
    74.24s  agent 발화 끝
    75.61s  user  발화 시작: So, both big ones in 2013? That's a bit concentrated.
    79.99s  agent 발화 시작: Sometimes a coach has a particularly outstanding year, clear
    80.14s  user  발화 끝
    83.48s  agent 발화 시작: <ret> I can confirm his overall record at Duke, if you wish…
    83.48s  <ret> 발화 (turn15 첫 프레임)
    83.55s  agent 발화 끝
    85.96s  ⚡SPAN 주입 [d'=2.48s / d_lead=4.12s]: During his tenure, David Cutcliffe achieved a 79–93 win-loss record wi
    91.73s  agent 발화 끝
    92.31s  user  발화 시작: Seventy-nine and ninety-three… not exactly stellar, is it?
    97.22s  agent 발화 시작: Building a program takes time and patience, as I well know.
    97.40s  user  발화 끝
   100.50s  agent 발화 끝
   101.16s  user  발화 시작: I suppose. Still, thanks for clarifying things.
   104.67s  user  발화 끝
