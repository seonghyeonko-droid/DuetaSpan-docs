# v3_abs_21_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# EXAMINER(FDB-v2) 단계: S1 안녕하세요. 프랑스 상원 의원 수는 몇 명인가요? | S2 프랑스 상원의 권한에 대해 설명해 주시겠어요? | S3 모든 것에 대해 투표할 수 있나요? | S4 만약 *그들*도 동의하지 못하면요?

     0.00s  user  발화 시작: 안녕하세요. 프랑스 상원 의원 수는 몇 명인가요?
     3.24s  user  발화 끝
     3.35s  <ret> 발화 (turn1 첫 프레임)
     3.59s  agent 발화 시작: <ret> 아, 프랑스 정부에 대한 흥미로운 질문이시네요. 지금 당장은 정확한 숫자를 가지고 있지 않아서 죄
     4.63s  ⚡SPAN 주입 [d'=1.28s / d_lead=3.72s]: (no information found)
    12.48s  user  발화 시작: 그럼 좀 찾아주시겠어요?
    12.62s  agent 발화 끝
    13.88s  <ret> 발화 (turn3 첫 프레임)
    14.14s  user  발화 끝
    14.20s  agent 발화 시작: <ret> 알아봤는데, 프랑스 상원은 총 삼백사십팔 명의 상원 의원으로 구성되어 있습니다. 꽤 큰 규모죠, 
    15.88s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.78s]: The French Senate has 348 senators, each elected by an electoral colle
    21.62s  user  발화 시작: 와, 정말 많네요. 미국 상원은요?
    21.76s  agent 발화 끝
    24.51s  agent 발화 시작: 미국 상원은 백 명의 의원으로 구성되어 있습니다.
    24.59s  user  발화 끝
    25.91s  user  발화 시작: 네.
    26.36s  user  발화 끝
    27.55s  user  발화 시작: 정말 큰 차이네요! 프랑스 상원이 더 강력한가요?
    27.55s  agent 발화 끝
    31.58s  user  발화 끝
    31.62s  agent 발화 시작: 그건 좀 복잡한 질문이라서, 간단하게 답하기는 어렵습니다.
    33.89s  user  발화 시작: 음.
    34.30s  user  발화 끝
    35.46s  agent 발화 끝
    36.26s  user  발화 시작: 프랑스 상원의 권한에 대해 설명해 주시겠어요?
    39.60s  <ret> 발화 (turn11 첫 프레임)
    39.99s  agent 발화 시작: <ret> 프랑스 상원의 입법 역할을 자세히 알아보겠습니다. 프랑스 상원은 국민 의회와 함께 법안을 검토하고
    40.15s  user  발화 끝
    41.60s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.16s]: The French Senate shares legislative power with the National Assembly,
    50.00s  agent 발화 끝
    50.07s  user  발화 시작: 그렇군요, 법을 바꿀 수 있군요?
    52.58s  agent 발화 시작: 네, 제안된 법안을 수정할 권한이 있습니다.
    52.71s  user  발화 끝
    53.46s  user  발화 시작: 네.
    54.05s  user  발화 끝
    55.49s  agent 발화 끝
    56.24s  user  발화 시작: 법 말고 다른 책임도 있나요?
    58.09s  <ret> 발화 (turn16 첫 프레임)
    58.16s  agent 발화 시작: <ret> 법률 제정 외에도 다른 역할도 있습니다. 지방 자치 단체를 대표하고 국제 조약을 비준하기도 합니다
    58.31s  user  발화 끝
    59.52s  ⚡SPAN 주입 [d'=1.44s / d_lead=3.10s]: The French Senate also represents local authorities and ratifies inter
    67.98s  agent 발화 끝
    68.06s  user  발화 시작: 지방 자치 단체를 대표한다는 게 흥미롭네요.
    71.30s  user  발화 끝
    71.51s  agent 발화 시작: 그것은 구조의 중요한 부분으로, 지역의 목소리가 전달되도록 하는 것입니다.
    76.69s  agent 발화 끝
    78.22s  user  발화 시작: 모든 것에 대해 투표할 수 있나요?
    80.20s  user  발화 끝
    80.21s  user  발화 시작: 국민 의회가 하는 모든 것에 대해 투표하나요?
    83.17s  user  발화 끝
    83.51s  agent 발화 시작: 좋은 지적입니다. 모든 것에 대해 투표하는 것은 아니고, 과정이 좀 더 복잡합니다. 셔틀 외교라는 시스템이 
    89.25s  user  발화 시작: 네.
    89.69s  user  발화 끝
    91.78s  user  발화 시작: 셔틀 외교가 뭔가요?
    91.90s  agent 발화 끝
    93.40s  agent 발화 시작: 상원과 국민 의회, 두 의회가 합의에 이를 때까지 협상하는 것을 의미합니다.
    93.57s  user  발화 끝
    96.64s  user  발화 시작: 네.
    97.27s  user  발화 끝
    98.61s  agent 발화 시작: 법에 대한 합의를 도출하기 위한 왕복 과정입니다.
    98.82s  agent 발화 끝
   100.64s  user  발화 시작: 네네.
   101.28s  user  발화 끝
   101.84s  agent 발화 끝
   101.86s  user  발화 시작: 만약 의견이 다르면 어떻게 되나요?
   104.08s  agent 발화 시작: 공동 위원회가 차이를 조정하려고 노력합니다.
   104.17s  user  발화 끝
   107.30s  agent 발화 끝
   107.32s  user  발화 시작: 만약 *그들*도 동의하지 못하면요?
   109.98s  agent 발화 시작: 일반적으로 국민 의회가 최종 결정을 내립니다.
   110.18s  user  발화 끝
   113.12s  agent 발화 끝
   113.72s  user  발화 시작: 아, 그렇군요. 그럼 국민 의회가 더 강력한가요?
   117.17s  agent 발화 시작: 의견이 불일치할 경우, 네, 국민 의회가 더 큰 권한을 가지고 있습니다.
   117.33s  user  발화 끝
   121.96s  user  발화 시작: 그건 좀 불공평한 것 같네요.
   122.02s  agent 발화 끝
   123.90s  user  발화 끝
   124.20s  agent 발화 시작: 프랑스 헌법의 역사적 발전을 반영한 결과입니다.
   127.57s  agent 발화 끝
