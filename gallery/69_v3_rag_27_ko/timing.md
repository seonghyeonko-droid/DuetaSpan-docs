# v3_rag_27_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_27",
#     "name": "진람",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2025-12-03",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-08-12",
#       "category": "work",
#       "text": "User works as a graphic designer."
#     },
#     {
#       "date": "2025-06-29",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2025-06-12",
#       "category": "diet",
#       "text": "User is gluten-free."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-02",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 오늘 하루 어떠셨어요? | S2 어렸을 때 그림 그리는 걸 좋아했어요. | S3 …그림을 다시 시작해볼까 생각 중이에요. | S4 … 아니, 그냥 아무거나 괜찮아요. 그림 그리는 것 자체가 좋

     0.00s  user  발화 시작: 오늘 하루 어떠셨어요?
     1.39s  agent 발화 시작: 오늘 하루도 편안하게 보내셨기를 바랍니다. 혹시 특별히 이야기하고 싶은 일이 있으신가요?
     1.39s  user  발화 끝
     6.49s  user  발화 시작: 그렇죠.
     6.49s  agent 발화 끝
     6.96s  user  발화 시작: 음… 요즘 커리어 때문에 고민이 좀 있어요.
     6.96s  user  발화 끝
    10.20s  agent 발화 시작: 커리어 고민이시군요. 어떤 점이 가장 힘드신가요? 구체적으로 말씀해주시면 제가 좀 더 도움이 될 수 있을 것
    10.20s  user  발화 끝
    18.09s  user  발화 시작: 제가 뭘 잘하는지, 뭘 하고 싶은지 잘 모르겠어요.
    18.09s  agent 발화 끝
    21.80s  agent 발화 시작: 네.
    21.80s  user  발화 끝
    22.15s  <ret> 발화 (turn7 첫 프레임)
    22.26s  agent 발화 시작: <ret> 많은 분들이 커리어에 대해 불확실성을 느끼고, 자신의 강점과 열정에 대해 혼란스러워하는 것은 흔한
    22.26s  agent 발화 끝
    22.52s  ⚡SPAN 주입 [d'=0.37s / d_lead=6.49s]: Many people experience uncertainty about their career path, and it is 
    28.75s  user  발화 시작: 네, 맞아요. 그냥 막막해요.
    28.75s  agent 발화 끝
    30.61s  agent 발화 시작: 막막한 기분은 당연합니다. 하지만 너무 걱정하지 마세요. 함께 차근차근 알아가면 분명 답을 찾을 수 있을 거
    30.61s  user  발화 끝
    40.81s  user  발화 시작: 어렸을 때 그림 그리는 걸 좋아했어요.
    40.81s  agent 발화 끝
    43.23s  <ret> 발화 (turn11 첫 프레임)
    43.58s  ⚡SPAN 주입 [d'=0.35s / d_lead=12.99s]: Art therapy is a form of psychotherapy that uses creative methods of e
    43.59s  agent 발화 시작: <ret> 어렸을 때 그림 그리기를 좋아하셨군요. 미술 치료는 예술 매체를 통해 감정을 탐구하고 자기 인식을
    43.59s  user  발화 끝
    56.58s  user  발화 시작: 아, 미술 치료요? 그거 재밌을 것 같아요.
    56.58s  agent 발화 끝
    59.82s  agent 발화 시작: 네, 흥미로운 분야죠. 혹시 미술 치료사가 되시는 걸 생각해 보신 적 있으신가요? 아니면 단순히 그림을 취미
    59.82s  user  발화 끝
    70.03s  user  발화 시작: 네.
    70.03s  agent 발화 끝
    70.49s  user  발화 시작: 음… 미술 치료사까지는 아니지만…
    70.49s  user  발화 끝
    72.35s  user  발화 시작: …그림을 다시 시작해볼까 생각 중이에요.
    72.35s  user  발화 끝
    74.66s  agent 발화 시작: 좋은 생각입니다. 그림을 통해 스트레스를 해소하고 자신을 표현하는 것은 매우 건강한 방법입니다. 요즘 그림을
    74.66s  user  발화 끝
    85.33s  user  발화 시작: 네.
    85.33s  agent 발화 끝
    85.79s  user  발화 시작: 강좌요? 어디서 찾아볼 수 있나요?
    85.79s  user  발화 끝
    88.08s  <ret> 발화 (turn20 첫 프레임)
    88.11s  agent 발화 시작: <ret> 서울시에는 다양한 미술 강좌가 있습니다. 강남구에 위치한 '아트 앤 디자인'에서는 유화, 수채화,
    88.11s  user  발화 끝
    89.00s  ⚡SPAN 주입 [d'=0.91s / d_lead=10.20s]: (tool result) 서울시에는 다양한 미술 강좌가 있습니다. 강남구에 위치한 '아트 앤 디자인'에서는 유화, 수채화, 드
    98.32s  user  발화 시작: 이십만원이면 괜찮네요. 혹시 다른 곳도 알아봐 주실 수 있나요?
    98.32s  agent 발화 끝
   102.49s  agent 발화 시작: 다른 미술 강좌도 찾아볼까요? 아니면 다른 종류의 취미 활동을 알아보는 것도 괜찮을 것 같아요.
   102.49s  user  발화 끝
   108.98s  user  발화 시작: 그렇죠.
   108.98s  agent 발화 끝
   109.45s  user  발화 시작: 아니요, 일단 미술 강좌부터 알아봐 주세요.
   109.45s  user  발화 끝
   112.23s  agent 발화 시작: 그럼 다른 미술 강좌를 더 찾아보겠습니다. 혹시 선호하는 스타일이나 기법이 있으신가요? —
   112.23s  user  발화 끝
   117.79s  user  발화 시작: … 아니, 그냥 아무거나 괜찮아요. 그림 그리는 것 자체가 좋아서요.
   117.79s  agent 발화 끝
   122.43s  agent 발화 시작: 네.
   122.43s  user  발화 끝
   122.89s  agent 발화 시작: 그림 그리는 것 자체가 좋으시다니 다행이네요. 그럼 좀 더 다양한 강좌를 찾아보겠습니다.
   122.89s  agent 발화 끝
   128.46s  user  발화 시작: 예.
   128.46s  agent 발화 끝
   128.92s  user  발화 시작: 네, 부탁드려요.
   128.92s  user  발화 끝
   129.85s  agent 발화 시작: 잠시만 기다려 주세요. 홍대에도 '미술 공작소'라는 곳이 있는데, 이곳에서는 다양한 재료를 활용한 미술 수업
   129.85s  user  발화 끝
   140.05s  user  발화 시작: 진짜요?
   140.05s  agent 발화 끝
   140.52s  user  발화 시작: 홍대요? 홍대는 가기도 편하고 좋네요.
   140.52s  user  발화 끝
   142.84s  agent 발화 시작: 네, 교통도 편리하고 주변에 볼거리도 많아서 좋습니다. 그림 그리면서 힐링하는 시간을 가져보시는 건 어떠세요
   142.84s  user  발화 끝
   149.33s  agent 발화 끝
