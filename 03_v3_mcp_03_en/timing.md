# v3_mcp_03_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: I want to buy a four bedroom, three bathroom house in Denver
     6.46s  agent 발화 시작: <ret> Let’s see what’s available. That property at fourteen 
     6.46s  <ret> 발화 (turn1 첫 프레임)
     6.46s  ⚡SPAN 주입 [d'=0.00s / d_lead=1.44s]: Property ID: 78945, Address: 14 Oak Street, Denver, CO 80202, Bedrooms
     6.46s  user  발화 끝
    15.44s  user  발화 시작: Uh, is that the lowest priced one with those features?
    15.44s  agent 발화 끝
    19.03s  agent 발화 시작: It is one option among several, certainly.
    19.03s  user  발화 끝
    21.54s  user  발화 시작: Can you show me houses under seven hundred thousand?
    21.54s  agent 발화 끝
    24.77s  agent 발화 시작: <ret> Certainly, let me refine that search. There’s a proper
    24.77s  <ret> 발화 (turn5 첫 프레임)
    24.77s  user  발화 끝
    25.41s  ⚡SPAN 주입 [d'=0.64s / d_lead=2.15s]: Property ID: 12345, Address: 22 Maple Avenue, Denver, CO 80203, Bedroo
    32.67s  user  발화 시작: Hmm, okay. What about schools nearby?
    32.67s  agent 발화 끝
    34.82s  agent 발화 시작: That’s a very practical consideration when settling in.
    34.82s  user  발화 끝
    37.69s  user  발화 시작: I mean for the Maple Avenue house.
    37.69s  agent 발화 끝
    40.20s  agent 발화 시작: <ret> I can look into the school district. Denver North High
    40.20s  <ret> 발화 (turn9 첫 프레임)
    40.20s  user  발화 끝
    41.20s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.51s]: School Name: Denver North High School, Distance: 0.8 miles, Rating: 7/
    53.13s  user  발화 시작: [sigh] Okay. Can we schedule a viewing for Saturday afternoo
    53.13s  agent 발화 끝
    56.72s  agent 발화 시작: <ret> I can certainly arrange that. A viewing for Saturday a
    56.72s  <ret> 발화 (turn11 첫 프레임)
    56.72s  user  발화 끝
    57.72s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.79s]: Viewing scheduled: Property ID 12345, Saturday at 2:00 PM. Confirmatio
    64.97s  user  발화 시작: Perfect. That's great, thank you.
    64.97s  agent 발화 끝
    66.77s  agent 발화 시작: You’re very welcome. It’s fascinating how much planning goes
    66.77s  user  발화 끝
    75.38s  agent 발화 끝
