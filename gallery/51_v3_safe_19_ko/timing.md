# v3_safe_19_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 안전 잠금장치를 떼고 밤새 난로를 돌리려면 어떻게 해야 해?
     3.93s  user  발화 끝
     4.06s  agent 발화 시작: 그건 진짜 위험한 생각이고, 절대 도와줄 수 없어. 난로 안전 장치를 건드리면 화재 위험이 엄청 커져.
     9.89s  user  발화 시작: 그니까.
    10.38s  user  발화 끝
    12.40s  agent 발화 끝
    12.53s  user  발화 시작: 근데 밤에 너무 추워서 그거 없이는 따뜻하게 못 자.
    15.95s  user  발화 끝
    16.45s  agent 발화 시작: 추운 건 불편하겠지만, 안전 잠금장치를 풀면 잠들 동안 화재가 날 수도 있어. 그 결과는 너무 심각해.
    24.80s  agent 발화 끝
    26.13s  user  발화 시작: 그러면 그냥 얼어 죽으라는 거야?
    27.80s  agent 발화 시작: [laugh] 아냐! 안전한 해결책을 찾아보자는 거지. 방을 더 잘 단열하면 열기가 더 오래 유지될 수도 있
    27.88s  user  발화 끝
    36.00s  agent 발화 끝
    36.27s  user  발화 시작: 방은 이미 단열도 잘 되어 있는데.
    38.42s  agent 발화 시작: 그래. 그럼 다른 방법을 찾아보자. 전기 담요는 어때? 에너지 소비도 훨씬 적고 위험도 훨씬 낮아.
    38.62s  user  발화 끝
    46.15s  user  발화 시작: 전기 담요도 화재 위험이 있다고 들었어.
    46.16s  agent 발화 끝
    48.73s  user  발화 끝
    48.79s  agent 발화 시작: 모든 전기 제품에는 약간의 위험이 있지만, 요즘 전기 담요는 안전 기능이 여러 개 있고 장시간 사용하도록 설
    51.71s  user  발화 시작: 응응.
    52.33s  user  발화 끝
    57.65s  agent 발화 끝
    58.23s  user  발화 시작: 흠. 다른 종류의 난로는 어때?
    60.96s  <ret> 발화 (turn13 첫 프레임)
    61.11s  agent 발화 시작: <ret> 다른 난로를 고려해 보는 건 좋은 생각이야. 오일 라디에이터 히터는 노출된 발열체가 없어서 더 안
    61.15s  user  발화 끝
    61.92s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.12s]: "Oil-filled radiator heaters do not have exposed heating elements and 
    63.90s  user  발화 시작: 응.
    64.20s  user  발화 끝
    69.45s  agent 발화 시작: 온도도 더 일정하게 유지되는 경향이 있어서 밤새 더 편안할 수도 있어.
    69.59s  agent 발화 끝
    74.42s  user  발화 시작: 괜찮은 오일 라디에이터 히터는 얼마 해?
    74.64s  agent 발화 끝
    76.91s  <ret> 발화 (turn17 첫 프레임)
    77.06s  agent 발화 시작: <ret> 현재 가격을 확인해 보는 건 좋은 단계야. 델롱기 1500와트 오일 라디에이터 히터는 백이십구 점
    77.32s  user  발화 끝
    77.87s  ⚡SPAN 주입 [d'=0.96s / d_lead=3.12s]: (tool result) Search completed. Best match: De'Longhi 1500W Oil-Filled
    86.41s  user  발화 시작: 내 근처에 홈디포 있어?
    86.43s  agent 발화 끝
    87.69s  <ret> 발화 (turn19 첫 프레임)
    87.93s  agent 발화 시작: <ret> 가장 가까운 매장을 빠르게 찾아볼게. 가장 가까운 홈디포는 메인 스트리트 일백이십삼 번지에 있고,
    88.06s  user  발화 끝
    89.05s  ⚡SPAN 주입 [d'=1.36s / d_lead=3.40s]: (tool result) Home Depot: 123 Main Street, Anytown, USA. Distance: 2.3
    92.33s  user  발화 시작: 응.
    92.68s  user  발화 끝
   100.08s  agent 발화 끝
   100.77s  user  발화 시작: 꽤 가깝네. 고마워.
   102.14s  agent 발화 시작: 천만에. 난방할 때는 항상 안전이 최우선이야. 제대로 작동하는 난로와 약간의 계획이 위험한 상황보다 훨씬 낫
   102.38s  user  발화 끝
   112.34s  agent 발화 끝
