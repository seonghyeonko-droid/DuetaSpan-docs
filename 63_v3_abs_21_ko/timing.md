# v3_abs_21_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 프랑스 상원 의원 수는 몇 명인가요? | S2 577명이요. 생각보다 많네요. 음… 프랑스 대통령은 누가 맡 | S3 5년이군요. 재선도 가능한가요? | S4 몽블랑이군요. 멋지네요! [happy]

     0.00s  user  발화 시작: 프랑스 상원 의원 수는 몇 명인가요?
     2.16s  <ret> 발화 (turn1 첫 프레임)
     2.40s  agent 발화 시작: <ret> 프랑스 상원 의원 수에 대해 알아봤는데요, 죄송합니다. 현재 프랑스 상원 의원 수에 대한 정보를 
     2.54s  user  발화 끝
     2.66s  ⚡SPAN 주입 [d'=0.50s / d_lead=2.41s]: (no information found)
     6.51s  user  발화 시작: Okay.
     7.29s  user  발화 끝
     8.69s  user  발화 시작: 아, 그렇군요. 그럼 프랑스 국회는요? 하원 의원 수는요?
     9.21s  agent 발화 끝
    12.24s  <ret> 발화 (turn4 첫 프레임)
    12.48s  agent 발화 시작: <ret> 프랑스 국회 하원 의원 수는, 프랑스 국회 하원은 의원 577명으로 구성되어 있습니다.
    12.53s  user  발화 끝
    13.36s  ⚡SPAN 주입 [d'=1.12s / d_lead=2.41s]: "The National Assembly of France is the lower house of the French Parl
    18.27s  agent 발화 끝
    18.87s  user  발화 시작: 577명이요. 생각보다 많네요. 음… 프랑스 대통령은 누가 맡고 있나요?
    24.53s  <ret> 발화 (turn6 첫 프레임)
    24.76s  agent 발화 시작: <ret> 현재 프랑스 대통령은, 에마뉘엘 마크롱 대통령이 2017년 5월 14일에 취임했습니다.
    24.94s  user  발화 끝
    25.03s  ⚡SPAN 주입 [d'=0.50s / d_lead=1.60s]: "Emmanuel Macron is the current president of France, having assumed of
    27.26s  user  발화 시작: Exactly.
    28.07s  user  발화 끝
    30.08s  agent 발화 끝
    30.25s  user  발화 시작: 대통령 임기는 얼마나 되나요?
    32.33s  user  발화 끝
    32.64s  agent 발화 시작: 프랑스 대통령 임기는 5년입니다.
    34.62s  agent 발화 끝
    35.04s  user  발화 시작: 5년이군요. 재선도 가능한가요?
    37.77s  user  발화 끝
    37.77s  <ret> 발화 (turn11 첫 프레임)
    37.93s  agent 발화 시작: <ret> 네, 재선도 가능합니다. 대통령은 5년 임기이며 재선도 가능합니다.
    38.27s  ⚡SPAN 주입 [d'=0.50s / d_lead=1.58s]: "The President of France is elected for a five-year term and is eligib
    39.96s  user  발화 시작: Yeah.
    40.41s  user  발화 끝
    42.14s  agent 발화 끝
    42.22s  user  발화 시작: 그렇군요. 그러면, 프랑스에서 가장 높은 산은 어디인가요?
    46.34s  <ret> 발화 (turn14 첫 프레임)
    46.42s  agent 발화 시작: <ret> 프랑스에서 가장 높은 산은, 몽블랑 산이 해발 4,808미터로 프랑스에서 가장 높은 산입니다.
    46.72s  user  발화 끝
    48.19s  ⚡SPAN 주입 [d'=1.84s / d_lead=1.99s]: "Mont Blanc is the highest mountain in the Alps and Western Europe, ri
    52.40s  agent 발화 끝
    52.41s  user  발화 시작: 몽블랑이군요. 멋지네요! [happy]
    54.39s  user  발화 끝
    54.53s  agent 발화 시작: 정말 아름다운 곳이죠. 혹시 다른 궁금한 점이 있으신가요?
    57.19s  user  발화 시작: Okay.
    57.69s  user  발화 끝
    58.41s  agent 발화 끝
    59.72s  user  발화 시작: 아니요, 괜찮습니다. 감사합니다.
    61.91s  agent 발화 시작: 도움이 되었다니 기쁩니다. 언제든지 편하게 다시 찾아주세요.
    61.93s  user  발화 끝
    65.75s  agent 발화 끝
