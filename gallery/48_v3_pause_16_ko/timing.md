# v3_pause_16_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 역사 속 질병에 대해 읽다가… 문득 나병이 요즘은 어디에서 가장 흔한지 궁금해졌어요.
     6.67s  <ret> 발화 (turn1 첫 프레임)
     6.76s  user  발화 끝
     6.91s  agent 발화 시작: <ret> 그건 정말 중요한 질문인 것 같아요. 현재 전 세계적으로 발생하는 새로운 나병 환자의 50% 이상
     8.67s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.65s]: India accounts for more than half of the world’s leprosy cases.
    15.12s  agent 발화 끝
    15.55s  user  발화 시작: 정말… 놀랍네요. 저는 항상 과거의 질병이라고 생각했거든요.
    20.25s  agent 발화 시작: 많은 분들이 오해하시는 부분이에요. 지속적인 빈곤과 의료 서비스 접근성의 제한이 나병의 지속적인 존재에 기여
    20.32s  user  발화 끝
    28.50s  agent 발화 끝
    29.06s  user  발화 시작: 그럼 인도는 아직도 나병이 큰 문제인가요?
    31.22s  <ret> 발화 (turn5 첫 프레임)
    31.38s  agent 발화 시작: <ret> 여전히 중요한 공중 보건 문제로 남아 있어요. 인도는 2023년에 새롭게 나병 환자 칠만 오천 명
    31.51s  user  발화 끝
    33.22s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.96s]: In 2023, India reported 75,000 new cases of leprosy.
    40.43s  agent 발화 끝
    40.55s  user  발화 시작: 칠만 오천 명… 와우.
    42.79s  agent 발화 시작: 상당한 숫자이지만, 검출 및 치료 노력이 계속 진행 중이에요.
    42.81s  user  발화 끝
    47.14s  agent 발화 끝
    47.21s  user  발화 시작: 다른 나라에도 높은 발생률을 보이는 곳이 있나요?
    49.51s  <ret> 발화 (turn9 첫 프레임)
    49.91s  agent 발화 시작: <ret> 네, 몇몇 다른 나라들도 어려움을 겪고 있어요. 인도의 다음으로 브라질과 인도네시아가 가장 영향을
    50.08s  user  발화 끝
    50.87s  ⚡SPAN 주입 [d'=1.36s / d_lead=3.53s]: Brazil and Indonesia follow India as countries with the highest lepros
    57.90s  user  발화 시작: 아프리카는요? 그곳에서도 문제가 있다고 들었어요.
    57.97s  agent 발화 끝
    60.89s  <ret> 발화 (turn11 첫 프레임)
    61.13s  agent 발화 시작: <ret> 그렇습니다. 특히 특정 지역에서 그러해요.
    61.27s  user  발화 끝
    62.17s  ⚡SPAN 주입 [d'=1.28s / d_lead=2.77s]: Several African countries, including the Democratic Republic of the Co
    63.85s  agent 발화 시작: 콩고 민주 공화국과 다른 아프리카 국가들이 나병으로 어려움을 겪고 있어요.
    63.90s  agent 발화 끝
    68.85s  agent 발화 끝
    71.69s  user  발화 시작: 치료가 가능한가요? 완치가 가능한가요?
    74.02s  agent 발화 시작: 네, 조기에 진단하고 다제 약물 요법을 사용하면 가능해요.
    74.04s  user  발화 끝
    79.30s  agent 발화 끝
    79.52s  user  발화 시작: 다제 약물 요법… 그게 뭘 의미하나요?
    82.20s  <ret> 발화 (turn16 첫 프레임)
    82.36s  agent 발화 시작: <ret> 여러 항생제를 병용하는 거예요… 표준 치료법은 dapson, rifampicin, clofazim
    82.57s  user  발화 끝
    84.20s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.54s]: Multidrug therapy for leprosy typically involves dapsone, rifampicin, 
    90.14s  agent 발화 끝
    90.32s  user  발화 시작: 이름이… 너무 어렵네요.
    92.31s  agent 발화 시작: 그렇지만, 내성균 발생을 막기 위해서는 전체 치료 과정을 준수하는 것이 중요해요.
    92.49s  user  발화 끝
    98.28s  agent 발화 끝
    98.88s  user  발화 시작: 하지만 조기에 발견하면 완전히 회복할 수 있나요?
   102.01s  user  발화 끝
   102.42s  agent 발화 시작: 네, 조기 개입이 절대적으로 중요해요—
   104.01s  user  발화 시작: 낙인에 대해서는요? 사람들이 따돌림당한다는 것을 읽었어요…
   104.67s  agent 발화 끝
   108.53s  agent 발화 시작: 정말 비극적으로 지속되는 문제예요. 역사적으로, 그리고 지금도 오정보가 두려움과 차별을 부추기고 있어요.
   108.69s  user  발화 끝
   114.97s  agent 발화 끝
   115.47s  user  발화 시작: 정말 끔찍하네요. 치료법이 있어도 사람들은 여전히 고통받는군요.
   120.02s  agent 발화 시작: 안타깝게도, 네. 사회적 결과가 질병만큼이나 고통스러울 수 있어요.
   120.10s  user  발화 끝
   125.76s  agent 발화 끝
   125.91s  user  발화 시작: 낙인을 없애기 위해 노력하는 일이 있나요?
   128.50s  user  발화 끝
   128.57s  agent 발화 시작: 많은 단체들이 오해를 바로잡기 위한 교육 및 옹호 프로그램을 진행하고 있어요.
   133.61s  agent 발화 끝
   134.30s  user  발화 시작: 그건 정말 다행이네요. 예방은요?
   136.44s  <ret> 발화 (turn28 첫 프레임)
   136.76s  agent 발화 시작: <ret> 예방 전략은 조기 발견과 치료에 초점을 맞추고 있어요… BCG 백신은 나병 발병에 대해 제한적인 
   136.88s  user  발화 끝
   138.44s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.21s]: BCG vaccination offers some protection against leprosy, but its effect
   145.71s  agent 발화 끝
   145.75s  user  발화 시작: 제한적인 보호……
   147.21s  user  발화 끝
   147.91s  user  발화 시작: …그럼 확실한 안전장치는 아닌 건가요?
   150.31s  user  발화 끝
   150.68s  agent 발화 시작: 그렇지 않지만, 일부 경우에는 질병의 심각성을 줄일 수 있어요.
   154.88s  agent 발화 끝
   155.45s  user  발화 시작: 그럼, 조기에 환자를 찾는 데 집중하는 것이 여전히 가장 좋은 방법인가요?
   160.11s  agent 발화 시작: 맞아요. 적극적인 환자 발견과 접근 가능한 치료가 가장 효과적인 전략이에요.
   160.17s  user  발화 끝
   165.15s  agent 발화 끝
