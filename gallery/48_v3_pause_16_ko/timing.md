# v3_pause_16_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 요즘 샌프란시스코 역사에 대해 읽고 있었는데… 진짜 멋진 곳이야.
     4.02s  user  발화 끝
     4.40s  agent 발화 시작: 정말이지, 흥미로운 지형 위에 여러 역사가 쌓인 도시예요.
     8.42s  agent 발화 끝
     8.81s  user  발화 시작: 궁금한 게 있는데… 사람들이 언제부터 거기에 살기 시작했어? 진짜, 진짜 처음으로…
    13.96s  <ret> 발화 (turn3 첫 프레임)
    14.56s  agent 발화 시작: <ret> 좋은 질문이에요. 고고학적 증거에 따르면 사람들이 기원전 3000년경부터 샌프란시스코 지역에 살았
    14.73s  user  발화 끝
    14.96s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.67s]: Humans first lived in the area of modern-day San Francisco around 3000
    22.58s  agent 발화 끝
    23.07s  user  발화 시작: 와, 기원전 3000년! 그건… 우리가 아는 거의 모든 것보다 훨씬 전이네.
    28.48s  user  발화 끝
    28.49s  agent 발화 시작: 그곳에 수천 년 동안 인간이 살았다는 점은 정말 놀랍고, 우리가 일반적으로 이해하는 기록된 역사 이전의 일이
    35.72s  agent 발화 끝
    35.86s  user  발화 시작: 그때 오흘론 사람들이었어? 그 이름이 그 지역과 관련되어 있다는 걸 들었거든.
    40.29s  <ret> 발화 (turn7 첫 프레임)
    40.89s  agent 발화 시작: <ret> 맞아요. 오흘론 사람들은 유럽인과의 접촉 전 수천 년 동안 샌프란시스코 만 지역의 주요 거주민이었
    41.00s  user  발화 끝
    41.01s  ⚡SPAN 주입 [d'=0.72s / d_lead=1.82s]: The Ohlone people were the primary inhabitants of the San Francisco Ba
    51.18s  agent 발화 끝
    51.25s  user  발화 시작: 그 사람들이… 음, 뭘 하면서 살았어? 그들의 생활 방식은 어땠어?
    56.07s  agent 발화 시작: 그들은 뛰어난 수렵 채집민이었고, 만과 해안선의 풍부한 자원을 활용했는데, 도토리가 주식이었어요.
    56.21s  user  발화 끝
    63.62s  user  발화 시작: 도토리? 그건… 놀랍네. 몰랐어.
    63.66s  agent 발화 끝
    67.06s  agent 발화 시작: 도토리에서 탄닌을 제거하려면 상당한 처리가 필요하지만, 안정적인 식량 공급원이 되었고, 그들은 그 기술을 능
    67.13s  user  발화 끝
    76.24s  agent 발화 끝
    77.61s  user  발화 시작: 영구적인 건물을 지었는지, 아니면 대부분 유목민이었는지 궁금해.
    81.45s  <ret> 발화 (turn13 첫 프레임)
    81.92s  user  발화 끝
    82.05s  agent 발화 시작: <ret> 흔히 묻는 질문이에요. 그들은 돔 모양의 집으로 마을을 건설했지만, 자원에 접근하기 위해 계절적으
    82.41s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.36s]: The Ohlone built villages of dome-shaped houses, but also moved season
    90.90s  agent 발화 끝
    91.40s  user  발화 시작: 그러면 둘 다 섞인 거네.…
    92.97s  user  발화 끝
    93.28s  user  발화 시작: …재밌네. 설명해 줘서 고마워.
    95.35s  user  발화 끝
