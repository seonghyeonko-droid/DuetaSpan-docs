# v3_rag_27_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: I’m researching old California mines. Do you know much about
     3.99s  agent 발화 시작: As a glaciologist, my work doesn’t often overlap with mining
     4.16s  user  발화 끝
    10.24s  agent 발화 끝
    10.32s  user  발화 시작: Great. I’m particularly interested in mercury mines. Was the
    15.74s  <ret> 발화 (turn3 첫 프레임)
    16.34s  agent 발화 시작: <ret> That’s a good question. The Sulphur Bank Mine in Lake 
    16.43s  user  발화 끝
    16.54s  ⚡SPAN 주입 [d'=0.80s / d_lead=1.32s]: The Sulphur Bank Mine in Lake County, California, became one of the mo
    22.71s  user  발화 시작: Oh, Sulphur Bank. I’ve heard that name before. When was it o
    22.92s  agent 발화 끝
    26.60s  <ret> 발화 (turn5 첫 프레임)
    27.20s  agent 발화 시작: <ret> Let me look that up for you. The Sulphur Bank Mine ope
    27.29s  user  발화 끝
    27.60s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.43s]: Sulphur Bank Mine operated from 1873 to 1883, producing over seventy-t
    33.45s  agent 발화 끝
    34.16s  user  발화 시작: Seventy-two thousand flasks… that's a lot! What was the merc
    39.64s  agent 발화 시작: Mercury has a surprisingly wide range of historical uses, pr
    39.71s  user  발화 끝
    46.24s  user  발화 시작: Gold extraction, right. I read something about hydraulic min
    46.40s  agent 발화 끝
    51.33s  agent 발화 시작: Hydraulic mining relied heavily on mercury to amalgamate gol
    51.51s  user  발화 끝
    59.69s  user  발화 시작: Damaging how?
    59.72s  agent 발화 끝
    60.36s  <ret> 발화 (turn11 첫 프레임)
    60.82s  agent 발화 시작: <ret> It had significant ecological consequences— Mercury re
    60.93s  user  발화 끝
    61.32s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.63s]: Mercury released from hydraulic mining contaminated waterways and harm
    66.98s  user  발화 시작: Yeah.
    67.70s  user  발화 끝
    70.27s  agent 발화 끝
    71.16s  user  발화 시작: So, was Sulphur Bank the only significant mercury mine in Ca
    76.35s  user  발화 끝
    76.48s  agent 발화 시작: No, there were others, but Sulphur Bank was particularly pro
    80.64s  user  발화 시작: Were there any other mines that rivaled its output?
    80.69s  agent 발화 끝
    83.07s  <ret> 발화 (turn16 첫 프레임)
    83.65s  agent 발화 시작: <ret> There was another mine— The New Almaden mine also in C
    83.71s  ⚡SPAN 주입 [d'=0.64s / d_lead=1.58s]: The New Almaden mine, also in California, was another major mercury pr
    83.83s  user  발화 끝
    90.74s  agent 발화 끝
    91.80s  user  발화 시작: Wait, New Almaden… wasn’t that one associated with a lot of 
    97.10s  agent 발화 시작: Yes, absolutely. The New Almaden mine had a complex history 
    97.12s  user  발화 끝
   101.49s  user  발화 시작: Can you tell me a bit about those disputes? What were the mi
   102.19s  agent 발화 끝
   106.26s  agent 발화 시작: The miners at New Almaden faced dangerous working conditions
   106.39s  user  발화 끝
   113.89s  <ret> 발화 (turn21 첫 프레임)
   114.48s  agent 발화 시작: <ret> Those conditions were quite harsh. Miners endured expo
   114.60s  agent 발화 끝
   114.85s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.19s]: Miners at New Almaden endured exposure to toxic mercury vapor, leading
   122.36s  agent 발화 끝
   123.83s  user  발화 시작: That’s terrible. I’m glad those issues are addressed now.
   127.31s  agent 발화 시작: Regulations and safety standards have improved significantly
   127.53s  user  발화 끝
   134.72s  agent 발화 끝
