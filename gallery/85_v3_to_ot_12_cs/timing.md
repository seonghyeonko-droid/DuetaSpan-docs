# v3_to_ot_12_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_12",
#     "name": "Kim",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "non-binary",
#     "age_range": "late 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-06",
#       "category": "work",
#       "text": "User works as a marketing manager."
#     },
#     {
#       "date": "2026-05-12",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     },
#     {
#       "date": "2026-04-23",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-03-10",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     },
#     {
#       "date": "2025-12-11",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-20",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-12-03",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 안녕 오레우스, 심장에 대해 궁금한 게 있어. | S2 알아두면 좋네. 그 동맥을 건강하게 유지하는 방법이 있을까? | S3 그럼 후행하강동맥이 막혀도 문제가 생길 수 있다는 거야? | S4 알았어. 연어랑 베리. 알겠어. 잠은 어때? 잠이 동맥 건강에

     0.00s  user  발화 시작: 안녕 오레우스, 심장에 대해 궁금한 게 있어.
     3.64s  agent 발화 시작: 네.
     3.64s  user  발화 끝
     4.16s  agent 발화 시작: 안녕하세요! 심장에 대해 이야기하게 되어 기뻐요. 혹시 특별히 알고 싶은 게 있으세요?
     4.16s  agent 발화 끝
    10.41s  user  발화 시작: 응, 있거든. 좌관상동맥은 어디에 혈액을 공급해?
    10.41s  agent 발화 끝
    13.53s  agent 발화 시작: 네.
    13.53s  user  발화 끝
    13.68s  <ret> 발화 (turn5 첫 프레임)
    14.05s  agent 발화 시작: <ret> 좌관상동맥은 좌심실과, 중요한 부분으로 심실중격에 혈액을 공급해요. 심장 기능에 아주 중요한 역할
    14.05s  agent 발화 끝
    14.30s  ⚡SPAN 주입 [d'=0.62s / d_lead=6.76s]: The left coronary artery supplies blood to the left ventricle and the 
    20.81s  user  발화 시작: 응.
    20.81s  agent 발화 끝
    21.33s  user  발화 시작: 오, 그렇구나. 그럼 우관상동맥은?
    21.33s  user  발화 끝
    23.14s  <ret> 발화 (turn8 첫 프레임)
    23.41s  agent 발화 시작: <ret> 우관상동맥은 우심방, 우심실, 그리고 좌심실의 하부에 혈액을 공급해요. 좌관상동맥과 함께 긴밀하게
    23.41s  user  발화 끝
    24.64s  ⚡SPAN 주입 [d'=1.50s / d_lead=6.24s]: The right coronary artery supplies blood to the right atrium, right ve
    29.66s  user  발화 시작: 어.
    29.66s  agent 발화 끝
    30.18s  user  발화 시작: 알아두면 좋네. 그 동맥을 건강하게 유지하는 방법이 있을까?
    30.18s  user  발화 끝
    34.34s  agent 발화 시작: 심장 건강에 좋은 생활 습관을 유지하는 게 중요해요. 식단, 운동, 스트레스 관리 모두 중요한 역할을 한답니
    34.34s  user  발화 끝
    42.66s  user  발화 시작: 운동은 하려고 하는데, 스트레스 관리가 잘 안 돼. 혹시 간단한 팁 같은 거 있어?
    42.66s  agent 발화 끝
    49.95s  agent 발화 시작: 물론이죠. 간단한 접지 운동이 도움이 될 수 있어요. 보이는 것 다섯 가지에 집중하고, 만질 수 있는 것 네
    49.95s  user  발화 끝
    59.83s  agent 발화 시작: …들리는 것 세 가지, 냄새 맡을 수 있는 것 두 가지, 그리고 맛볼 수 있는 것 한 가지에 집중하는 거예요
    59.83s  agent 발화 끝
    70.24s  user  발화 시작: …잠깐만, 심실중격은 자체적인 혈액 공급이 있는 거야, 아니면 그 동맥에만 전적으로 의존하는 거야?
    70.24s  agent 발화 끝
    76.55s  <ret> 발화 (turn16 첫 프레임)
    76.85s  ⚡SPAN 주입 [d'=0.30s / d_lead=7.28s]: The interventricular septum receives blood supply primarily from both 
    77.00s  agent 발화 시작: <ret> 심실중격은 좌우관상동맥으로부터 주로 혈액을 공급받지만, 후행하강동맥으로부터도 약간의 기여를 받아요
    77.00s  user  발화 끝
    84.29s  user  발화 시작: 그럼 후행하강동맥이 막혀도 문제가 생길 수 있다는 거야?
    84.29s  agent 발화 끝
    88.45s  agent 발화 시작: 네, 막히면 문제가 생길 수 있지만, 그 역할은 상대적으로 작아요. 모든 경로에 대해 생각하시는 게 좋네요.
    88.45s  user  발화 끝
    96.77s  user  발화 시작: 응.
    96.77s  agent 발화 끝
    97.29s  user  발화 시작: 알겠어. 심장 건강에 가장 좋은 식단은 뭐야?
    97.29s  user  발화 끝
   100.93s  agent 발화 시작: 와.
   100.93s  user  발화 끝
   101.11s  <ret> 발화 (turn22 첫 프레임)
   101.45s  agent 발화 시작: <ret> 심장 건강에 좋은 식단은 과일, 채소, 통곡물, 저지방 단백질, 건강한 지방을 강조하고, 포화 지
   101.45s  agent 발화 끝
   101.73s  ⚡SPAN 주입 [d'=0.62s / d_lead=14.57s]: A heart-healthy diet emphasizes fruits, vegetables, whole grains, lean
   116.02s  user  발화 시작: 그래.
   116.02s  agent 발화 끝
   116.54s  user  발화 시작: 그건…제약적인 것 같아. 동맥 건강에 특히 *좋은* 음식은 뭐가 있을까?
   116.54s  user  발화 끝
   121.75s  agent 발화 시작: [curious] 있죠! 오메가-삼 지방산이 풍부한 연어와 아마씨 같은 음식이 아주 좋아요. 베리류도 항산화
   121.75s  user  발화 끝
   129.55s  user  발화 시작: 응.
   129.55s  agent 발화 끝
   130.07s  user  발화 시작: 알았어. 연어랑 베리. 알겠어. 잠은 어때? 잠이 동맥 건강에 영향을 미쳐?
   130.07s  user  발화 끝
   135.79s  agent 발화 시작: 예.
   135.79s  user  발화 끝
   136.31s  agent 발화 시작: 물론이죠. 수면 부족은 혈압과 염증을 높일 수 있는데, 둘 다 동맥에 해로운 영향을 미친답니다. 매일 밤 일
   136.31s  agent 발화 끝
   147.76s  user  발화 시작: 일곱시간에서 아홉시간… 그 정도 잠을 자기가 정말 어려워.
   147.76s  agent 발화 끝
   151.92s  agent 발화 시작: 음.
   151.92s  user  발화 끝
   152.44s  agent 발화 시작: 흔한 일이에요. 규칙적인 수면 스케줄을 세우고 편안한 취침 루틴을 만드는 것이 도움이 될 수 있어요. 원하시
   152.44s  agent 발화 끝
   163.89s  agent 발화 끝
