# v3_hesit_22_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Um, so, what does the kidney actually *do* besides, you know
     5.23s  agent 발화 시작: Well, the kidneys are surprisingly versatile organs, truly. 
     5.32s  user  발화 끝
    17.00s  agent 발화 끝
    18.57s  user  발화 시작: Right, right. But I was reading something about hormones… do
    23.33s  <ret> 발화 (turn3 첫 프레임)
    23.65s  ⚡SPAN 주입 [d'=0.32s / d_lead=1.75s]: Erythropoietin, a hormone produced by the kidneys, stimulates red bloo
    23.93s  agent 발화 시작: <ret> That's a good question. The kidneys produce erythropoi
    23.99s  user  발화 끝
    30.59s  user  발화 시작: Erythropoietin… that’s a mouthful. Is that the *only* hormon
    30.93s  agent 발화 끝
    38.15s  user  발화 끝
    38.46s  agent 발화 시작: It’s the primary one most folks recall, but there are others
    48.75s  agent 발화 끝
    49.01s  user  발화 시작: Okay, so, like, what other hormones are we talking about?
    51.74s  <ret> 발화 (turn7 첫 프레임)
    52.33s  agent 발화 시작: <ret> Let's clarify that a bit. Kidneys convert angiotensin 
    52.44s  user  발화 끝
    52.74s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.70s]: The kidneys convert angiotensin I to angiotensin II, a hormone that ra
    61.42s  user  발화 시작: Angiotensin… wow. That sounds… important. Does that have som
    61.51s  agent 발화 끝
    68.45s  agent 발화 시작: Absolutely. Sodium balance is intricately tied to the renin-
    68.61s  user  발화 끝
    79.88s  user  발화 시작: So, the kidneys, they’re kinda like a hormonal control panel
    80.09s  agent 발화 끝
    83.79s  <ret> 발화 (turn11 첫 프레임)
    84.27s  ⚡SPAN 주입 [d'=0.48s / d_lead=1.93s]: Calcitriol, the active form of vitamin D, is produced in the kidneys a
    84.39s  agent 발화 시작: <ret> In a way, yes. The kidneys produce calcitriol, the act
    84.47s  user  발화 끝
    92.59s  agent 발화 끝
    92.63s  user  발화 시작: Calcitriol… vitamin D? I didn’t know the kidneys were involv
    97.68s  user  발화 끝
    97.86s  agent 발화 시작: It’s often overlooked, but vital. Many systems collaborate t
   105.60s  agent 발화 끝
   105.69s  user  발화 시작: Okay, uh, so, just to recap—erythropoietin, angiotensin, and
   112.69s  user  발화 끝
   112.86s  agent 발화 시작: Precisely. Those three hormones represent the kidney's major
   120.56s  agent 발화 끝
