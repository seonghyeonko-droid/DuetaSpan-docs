# v3_mcp_01_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Read the first three lines of the hosts file, please.
     4.38s  agent 발화 시작: <ret> Certainly. The first three lines contain entries for l
     4.38s  <ret> 발화 (turn1 첫 프레임)
     4.38s  ⚡SPAN 주입 [d'=0.00s / d_lead=0.44s]: 127.0.0.1 localhost / 127.0.1.1 mymachine / ::1 localhost
     4.38s  user  발화 끝
    11.38s  user  발화 시작: Hmm. That "mymachine" entry… I don't remember adding that. I
    11.38s  agent 발화 끝
    16.63s  agent 발화 시작: It’s not uncommon for systems to define a hostname like that
    16.63s  user  발화 끝
    23.20s  user  발화 시작: Okay. Now, can you find me a good Italian restaurant nearby,
    23.20s  agent 발화 끝
    29.32s  agent 발화 시작: <ret> I’ve found a place. Bella Notte on Elm Street is open 
    29.32s  <ret> 발화 (turn5 첫 프레임)
    29.32s  user  발화 끝
    30.04s  ⚡SPAN 주입 [d'=0.72s / d_lead=1.75s]: Restaurant: Bella Notte, Address: 14 Elm Street, Hours: 11:00 AM - 10:
    39.39s  user  발화 시작: Ten thirty…that’s cutting it close. Book a table for two at 
    39.39s  agent 발화 끝
    46.39s  agent 발화 시작: <ret> Done. Your table for two at Bella Notte is confirmed f
    46.39s  <ret> 발화 (turn7 첫 프레임)
    46.39s  user  발화 끝
    46.55s  ⚡SPAN 주입 [d'=0.16s / d_lead=0.44s]: Confirmation: Bella Notte, 9:15 PM, Party of 2, Confirmation number: B
    53.39s  user  발화 시작: Perfect. Thanks, Dr. Sato.
    53.39s  agent 발화 끝
    55.14s  agent 발화 시작: You’re very welcome. I find the interplay between planning a
    55.14s  user  발화 끝
    61.71s  agent 발화 끝
