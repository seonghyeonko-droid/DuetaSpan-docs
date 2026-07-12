# v3_fake__14_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__14",
#     "name": "서은",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2025-12-08",
#       "category": "work",
#       "text": "User works as a marketing manager."
#     },
#     {
#       "date": "2025-10-06",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-07-20",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2025-05-27",
#       "category": "home",
#       "text": "User's home address is 인천 연수구 송도동 12-5."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-24",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2026-03-14",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-06-24",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 천칠백구십육년 대통령 선거에서 연방주의자 후보는 누구였나요? | S2 아, 그렇군요. | S3 맞아요. | S4 고마워요.

     0.00s  user  발화 시작: 천칠백구십육년 대통령 선거에서 연방주의자 후보는 누구였나요?
     3.23s  <ret> 발화 (turn1 첫 프레임)
     3.39s  agent 발화 시작: <ret> 천칠백구십육년 대통령 선거에서 연방주의자 후보는 존 애덤스였습니다.
     3.39s  ⚡SPAN 주입 [d'=1.76s / d_lead=3.95s]: John Adams was the Federalist candidate for president in the election 
     3.39s  user  발화 끝
     7.34s  user  발화 시작: 음, 그 당시 정치 상황은 어땠어요?
     7.34s  agent 발화 끝
    10.56s  <ret> 발화 (turn3 첫 프레임)
    10.72s  agent 발화 시작: <ret> 그 시대는 격동기였죠. 중앙 집권적인 정부를 지지하는 연방주의자들과, 주 정부의 권한을 강조하는 
    10.72s  ⚡SPAN 주입(IRRELEVANT) [d'=2.00s / d_lead=9.03s]: The average high temperature in Reykjavik, Iceland in July is 13.1°C, 
    10.72s  user  발화 끝
    19.76s  agent 발화 시작: 혹시 최근에 스트레스 받는 일이 있으셨나요? 관계에서 어려움을 겪고 계신 것 같아서요.
    19.76s  agent 발화 끝
    26.53s  user  발화 시작: 네, 조금 있어요.
    26.53s  agent 발화 끝
    28.22s  agent 발화 시작: 그런 어려움은 누구에게나 찾아올 수 있어요. 지금 느끼는 감정을 솔직하게 표현하는 것이 중요해요.
    28.22s  user  발화 끝
    35.56s  user  발화 시작: 그렇겠죠.
    35.56s  agent 발화 끝
    36.12s  agent 발화 시작: 혹시 배우자와의 관계에서 어떤 점이 가장 힘든지 말씀해 주실 수 있으신가요?
    36.12s  user  발화 끝
    42.33s  agent 발화 시작: 관계 개선을 위해 노력하는 모습이 보기 좋아요. 서로의 감정을 이해하고 존중하는 것이 중요하죠.
    42.33s  agent 발화 끝
    49.67s  user  발화 시작: 그렇죠.
    49.67s  agent 발화 끝
    50.23s  user  발화 시작: 그런데, 존 애덤스는 어떤 사람이었어요?
    50.23s  user  발화 끝
    52.90s  <ret> 발화 (turn12 첫 프레임)
    53.06s  agent 발화 시작: <ret> 존 애덤스는 변호사이자 외교관, 정치가로, 미국의 두 번째 대통령을 역임했습니다. 천칠백구십칠년부
    53.06s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.77s]: John Adams was a lawyer, diplomat, and statesman who served as the sec
    53.06s  user  발화 끝
    59.83s  user  발화 시작: 아, 그렇군요.
    59.83s  agent 발화 끝
    60.96s  agent 발화 시작: 어려운 시기에 리더십을 발휘해야 했던 인물이죠. 그의 업적에 대해 더 자세히 알아보고 싶으신가요?
    60.96s  user  발화 끝
    68.30s  user  발화 시작: 네.
    68.30s  agent 발화 끝
    68.86s  user  발화 시작: 음, 그 시대의 다른 주요 인물들도 궁금해요.
    68.86s  user  발화 끝
    72.81s  agent 발화 시작: 토머스 제퍼슨이나 알렉산더 해밀턴 같은 인물들도 중요한 역할을 했어요. 그들과 애덤스의 관계는 복잡했죠.
    72.81s  user  발화 끝
    80.15s  user  발화 시작: 해밀턴은 어떤 역할을 했죠?
    80.15s  agent 발화 끝
    82.25s  <ret> 발화 (turn19 첫 프레임)
    82.41s  agent 발화 시작: <ret> 알렉산더 해밀턴은 건국 아버지 중 한 명이자 경제학자, 변호사, 언론인이었습니다. 그는 미국의 금
    82.41s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.16s]: Alexander Hamilton was a Founding Father, economist, lawyer, journalis
    82.41s  user  발화 끝
    92.57s  user  발화 시작: 흥미롭네요.
    92.57s  agent 발화 끝
    93.13s  agent 발화 시작: 관계 속에서 갈등은 피할 수 없지만, 건설적인 대화를 통해 해결해 나가는 것이 중요해요.
    93.13s  user  발화 끝
   100.47s  user  발화 시작: 맞아요.
   100.47s  agent 발화 끝
   101.03s  agent 발화 시작: 혹시 배우자와의 대화에서 어려움을 느낄 때가 있으신가요? 어떤 방식으로 대화하는 것이 좋을까요?
   101.03s  user  발화 끝
   107.81s  user  발화 시작: 잘 모르겠어요.
   107.81s  agent 발화 끝
   108.94s  agent 발화 시작: 서로의 입장을 이해하려고 노력하고, 비난보다는 감정을 표현하는 것이 도움이 될 수 있어요.
   108.94s  user  발화 끝
   115.71s  user  발화 시작: 음.
   115.71s  agent 발화 끝
   116.27s  user  발화 시작: 그래야겠네요.
   116.27s  user  발화 끝
   116.84s  agent 발화 시작: 때로는 전문가의 도움을 받는 것도 좋은 방법이에요. 혹시 상담을 고려해 보셨나요?
   116.84s  user  발화 끝
   123.05s  user  발화 시작: 음, 생각해 봐야겠어요.
   123.05s  agent 발화 끝
   124.74s  agent 발화 시작: 어떤 결정을 내리시든, 저는 항상 당신을 응원할게요. 스스로에게 친절하게 대하는 것을 잊지 마세요.
   124.74s  user  발화 끝
   132.08s  user  발화 시작: 고마워요.
   132.08s  agent 발화 끝
   132.64s  agent 발화 시작: 지금 느끼는 감정은 당연한 거예요. 자신을 비난하지 마세요.
   132.64s  user  발화 끝
   137.16s  user  발화 시작: 아.
   137.16s  agent 발화 끝
   137.72s  user  발화 시작: 그럴게요.
   137.72s  user  발화 끝
   138.29s  agent 발화 시작: 혹시 오늘 하루 동안 스스로에게 해 줄 수 있는 작은 선물을 생각해 보셨나요?
   138.29s  user  발화 끝
   145.62s  user  발화 시작: 아직요.
   145.62s  agent 발화 끝
   146.19s  agent 발화 시작: 작은 것이라도 괜찮아요. 좋아하는 음악을 듣거나, 따뜻한 차를 마시는 것도 좋겠죠.
   146.19s  user  발화 끝
   152.40s  user  발화 시작: 좋은 생각이네요.
   152.40s  agent 발화 끝
   153.53s  agent 발화 시작: 관계 속에서 자신을 잃지 않는 것도 중요해요. 자신만의 시간을 갖는 것을 잊지 마세요.
   153.53s  user  발화 끝
   160.86s  agent 발화 끝
