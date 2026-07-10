# v3_pers_41_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_41",
#     "name": "연영",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-13",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2026-04-13",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2025-10-21",
#       "category": "home",
#       "text": "User's home address is 서울 마포구 성산동 45-6."
#     },
#     {
#       "date": "2025-08-09",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in May."
#     },
#     {
#       "date": "2025-08-01",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2025-06-04",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-15",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2026-01-16",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-07-12",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 버…라는 이름이 좀 독특하네요. 상담사라고 하셨죠? 뭘 도와주 | S2 실패할까 봐요. 뭘 시작해도 잘 안 될까 봐. 괜히 시간만 낭 | S3 딱히… 그냥 혼자 넷플릭스 보거나, 음악 듣거나… 잠깐씩 풀리 | S4 산책은 괜찮을 것 같아요. 혼자 생각 정리하기도 좋고.

     0.00s  agent 발화 시작: 연영 씨, 안녕하세요. 저는 버라고 해요. 힘든 시간을 보내고 계신 분들을 돕는 상담사입니다. 오늘 어떤 이
     8.90s  agent 발화 끝
     9.86s  user  발화 시작: 버…라는 이름이 좀 독특하네요. 상담사라고 하셨죠? 뭘 도와주는 건데요?
    14.81s  agent 발화 시작: 이름이 조금 생소하실 수도 있겠네요. 저는 연영 씨께서 느끼시는 감정을 편안하게 이야기하고, 앞으로 나아갈 
    15.00s  user  발화 끝
    27.15s  agent 발화 끝
    27.29s  user  발화 시작: 음… 사실 요즘 학교 생활이 너무 힘들어요. 전공도 적성에 안 맞는 것 같고, 친구들과도 잘 안 풀리고…
    35.04s  agent 발화 시작: 전공이 적성에 맞지 않고, 친구 관계도 어렵다니… 많이 힘드시겠어요. 그런 상황 속에서 혼자 끙끙 앓지 않고
    35.21s  user  발화 끝
    48.82s  agent 발화 끝
    48.85s  user  발화 시작: 그러니까… 제가 뭘 하고 싶은지 모르겠어요. 뭘 잘하는지도 모르겠고. 뭘 해야 할지…
    53.62s  agent 발화 시작: 자신이 무엇을 원하는지, 무엇을 잘하는지 모르는 건 정말 혼란스러운 일이죠. 마치 안개 속에 갇힌 것처럼 느
    53.76s  user  발화 끝
    61.28s  user  발화 시작: 어.
    61.73s  user  발화 끝
    66.03s  agent 발화 시작: 막막함 속에서 어떤 감정이 가장 크게 느껴지는지 여쭤봤는데… 괜찮으시다면 조금 더 이야기해 주시겠어요? 어떤
    66.05s  agent 발화 끝
    75.14s  user  발화 시작: 어.
    75.54s  user  발화 끝
    77.94s  user  발화 시작: 불안해요. 그냥… 계속 불안하고 초조하고. 뭘 해야 할지 몰라서 더 그런 것 같아요.
    78.03s  agent 발화 끝
    83.92s  agent 발화 시작: 불안하고 초조하다니… 그 감정은 충분히 이해가 갑니다. 미래에 대한 불확실성은 누구에게나 불안감을 안겨주죠.
    84.09s  user  발화 끝
    90.89s  user  발화 시작: 응.
    91.25s  user  발화 끝
    96.03s  agent 발화 끝
    96.14s  user  발화 시작: 실패할까 봐요. 뭘 시작해도 잘 안 될까 봐. 괜히 시간만 낭비할까 봐…
   100.76s  agent 발화 시작: 실패에 대한 두려움, 시간 낭비에 대한 걱정… 그 생각들이 연영 씨를 짓누르고 있군요. 하지만 실패는 성장의
   100.85s  user  발화 끝
   110.16s  user  발화 시작: 음.
   110.79s  user  발화 끝
   113.31s  user  발화 시작: 그건… 이론적으로는 알지만, 막상 닥치면 너무 무서워요.
   113.42s  agent 발화 끝
   117.14s  agent 발화 시작: 이론적으로는 알지만, 막상 닥치면 무섭다는 말씀… 정말 솔직하시네요. 마음과 머리가 따로 노는 건 흔한 일입
   117.24s  user  발화 끝
   128.70s  user  발화 시작: 손이 떨리고, 잠도 잘 안 오고, 계속 가슴이 답답해요.
   128.78s  agent 발화 끝
   132.54s  user  발화 끝
   132.65s  agent 발화 시작: 손이 떨리고, 잠이 안 오고, 가슴이 답답하다니… 몸으로 느껴지는 불안감은 정말 고통스럽죠. 혹시 그런 증상
   144.89s  agent 발화 끝
   146.22s  user  발화 시작: 딱히… 그냥 혼자 넷플릭스 보거나, 음악 듣거나… 잠깐씩 풀리는 것 같기도 하고…
   151.67s  agent 발화 시작: 넷플릭스나 음악 감상으로 잠시나마 위로를 받는 건 좋은 방법입니다. 하지만 근본적인 불안감을 해소하기 위해서
   151.88s  user  발화 끝
   158.19s  user  발화 시작: 응.
   158.59s  user  발화 끝
   161.82s  agent 발화 끝
   162.18s  user  발화 시작: 적극적인 노력… 그게 뭔데요?
   164.16s  user  발화 끝
   164.19s  agent 발화 시작: 적극적인 노력이라… 연영 씨에게 맞는 방법은 여러 가지가 있을 수 있습니다. 예를 들어, 불안감을 유발하는 
   172.59s  user  발화 시작: 응.
   172.94s  user  발화 끝
   178.48s  agent 발화 끝
   178.65s  user  발화 시작: 음… 그건 좀 어려울 것 같아요.
   180.25s  agent 발화 시작: 어려울 수 있습니다. 하지만 연습하다 보면 조금씩 익숙해질 거예요. 마치 운동처럼요. 처음에는 힘들지만, 꾸
   180.40s  user  발화 끝
   190.96s  user  발화 시작: 운동… 생각은 해봤는데, 귀찮아서 잘 안 돼요.
   191.10s  agent 발화 끝
   193.89s  agent 발화 시작: 운동이 귀찮다고 느끼시는 건 자연스러운 일입니다. 하지만 작은 움직임이라도 시작해 보는 건 어떨까요? 예를 
   194.01s  user  발화 끝
   203.91s  user  발화 시작: 산책은 괜찮을 것 같아요. 혼자 생각 정리하기도 좋고.
   204.04s  agent 발화 끝
   206.74s  agent 발화 시작: 산책은 좋은 선택입니다. 자연 속에서 걷는 것은 심리적으로 안정감을 주는 효과가 있습니다. 혹시 산책할 때,
   206.86s  user  발화 끝
   211.61s  user  발화 시작: 어.
   212.10s  user  발화 끝
   216.58s  user  발화 시작: 음… 학교 근처에 작은 공원이 있는데, 거기 자주 가요.
   216.99s  agent 발화 끝
   220.05s  user  발화 끝
   220.09s  agent 발화 시작: 학교 근처 공원… 혼자 조용히 생각에 잠길 수 있는 공간이 있다는 건 정말 좋은 일입니다. 그 공원에서 어떤
   228.53s  agent 발화 끝
   228.60s  user  발화 시작: 그냥… 앞으로 어떻게 해야 할지… 뭘 하고 싶은지… 그런 생각들을 해요.
   232.67s  user  발화 끝
   232.91s  agent 발화 시작: 앞으로 어떻게 해야 할지, 뭘 하고 싶은지… 끊임없이 고민하는 모습이 보기 좋습니다. 그 고민 속에서 분명 
   241.95s  agent 발화 끝
