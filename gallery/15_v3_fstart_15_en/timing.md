# v3_fstart_15_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: What are the latitude and longitude of the Sydney Opera Hous
     3.87s  <ret> 발화 (turn1 첫 프레임)
     3.94s  user  발화 끝
     3.95s  agent 발화 시작: <ret> That’s a landmark I’ve always wanted to visit… It's at
     4.91s  ⚡SPAN 주입 [d'=1.04s / d_lead=2.94s]: (tool result) The Sydney Opera House is located at -33.8568 degrees la
    13.87s  agent 발화 끝
    13.91s  user  발화 시작: And what about the Eiffel Tower?
    15.46s  <ret> 발화 (turn3 첫 프레임)
    15.70s  agent 발화 시작: <ret> Oh, a classic choice for comparison, naturally… The Ei
    15.89s  user  발화 끝
    16.74s  ⚡SPAN 주입 [d'=1.28s / d_lead=2.40s]: (tool result) The Eiffel Tower is located at 48.8584 degrees latitude 
    19.03s  user  발화 시작: Yeah.
    19.52s  user  발화 끝
    24.97s  agent 발화 끝
    25.62s  user  발화 시작: Hmm, interesting. Are there any jazz clubs near the Eiffel T
    30.93s  <ret> 발화 (turn6 첫 프레임)
    31.01s  agent 발화 시작: <ret> Paris and jazz…a beautiful combination. Le Caveau de l
    31.22s  user  발화 끝
    32.61s  ⚡SPAN 주입 [d'=1.68s / d_lead=1.95s]: (tool result) Le Caveau de la Huchette is a jazz club located 0.6 mile
    34.09s  user  발화 시작: Yeah.
    34.63s  user  발화 끝
    39.20s  agent 발화 끝
    40.38s  user  발화 시작: That sounds promising.
    42.31s  user  발화 끝
    42.46s  agent 발화 시작: It’s a very well-known spot, been around for decades, actual
    45.33s  user  발화 시작: Yeah, yeah.
    46.80s  user  발화 끝
    48.11s  agent 발화 끝
    48.17s  user  발화 시작: What kind of music do they usually play?
    50.30s  <ret> 발화 (turn12 첫 프레임)
    50.69s  agent 발화 시작: <ret> They lean toward the traditional side, generally… They
    50.80s  ⚡SPAN 주입 [d'=0.50s / d_lead=3.20s]: (tool result) Le Caveau de la Huchette typically features traditional 
    50.90s  user  발화 끝
    56.06s  user  발화 시작: Yeah, totally.
    57.34s  user  발화 끝
    58.39s  user  발화 시작: Do they have a website?
    58.47s  agent 발화 끝
    59.70s  <ret> 발화 (turn15 첫 프레임)
    59.94s  agent 발화 시작: <ret> Most places do these days, thankfully… Their website i
    60.04s  user  발화 끝
    60.66s  ⚡SPAN 주입 [d'=0.96s / d_lead=3.22s]: (tool result) Le Caveau de la Huchette’s website is https://www.caveau
    66.38s  agent 발화 끝
    66.58s  user  발화 시작: I— I mean, could you spell that out for me?
    68.64s  agent 발화 시작: Certainly. C-a-v-e-a-u, d-e, l-a, h-u-c-h-e-t-t-e, dot f-r.
    68.84s  user  발화 끝
    71.04s  user  발화 시작: Mhm.
    71.53s  user  발화 끝
    75.77s  agent 발화 끝
    76.21s  user  발화 시작: Great. What's their phone number?
    78.02s  <ret> 발화 (turn20 첫 프레임)
    78.16s  agent 발화 시작: <ret> Good to have that handy, just in case… It's plus thirt
    78.38s  user  발화 끝
    80.02s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.49s]: (tool result) Le Caveau de la Huchette’s phone number is +33 1 45 55 6
    81.83s  user  발화 시작: Uh-huh.
    82.32s  user  발화 끝
    85.13s  agent 발화 끝
    85.75s  user  발화 시작: Thank you.
    86.43s  user  발화 끝
    86.52s  agent 발화 시작: My pleasure. A little bit of Paris right at your fingertips.
    88.12s  user  발화 시작: Yeah.
    88.62s  user  발화 끝
    90.55s  agent 발화 끝
    91.54s  user  발화 시작: Could you set a reminder to check their schedule tomorrow mo
    94.70s  <ret> 발화 (turn26 첫 프레임)
    94.94s  agent 발화 시작: <ret> Absolutely.
    95.15s  user  발화 끝
    95.20s  ⚡SPAN 주입 [d'=0.50s / d_lead=1.00s]: (tool result) Reminder set for 9:00 AM tomorrow to check Le Caveau de 
    95.93s  agent 발화 시작: I've set a reminder for nine a.m. tomorrow to check their sc
    95.94s  agent 발화 끝
    99.83s  user  발화 시작: Perfect!
    99.91s  agent 발화 끝
   100.64s  agent 발화 시작: Wonderful. Perhaps a little bit of Django Reinhardt will ins
   100.65s  user  발화 끝
   105.27s  agent 발화 끝
