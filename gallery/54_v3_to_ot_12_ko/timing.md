# v3_to_ot_12_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_12",
#     "name": "라서",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "50s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-03",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     },
#     {
#       "date": "2025-10-16",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2025-09-26",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2025-08-21",
#       "category": "work",
#       "text": "User works as a chef."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-14",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-07-20",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 슈퍼볼에서 버크스 팀이 우승했을 때 쿼터백이 누구였는지 궁금해 | S2 음… 그 경기에서 버크스 팀은 누구와 맞붙었죠? | S3 아, 아니에요. 그런데 드루낸 씨, 잠들기 전에 긴장을 푸는  | S4 아, 죄송해요. 다시 말씀해 주시겠어요?

     0.00s  user  발화 시작: 슈퍼볼에서 버크스 팀이 우승했을 때 쿼터백이 누구였는지 궁금해요.
     3.72s  <ret> 발화 (turn1 첫 프레임)
     4.04s  agent 발화 시작: <ret> 슈퍼볼 삼십칠에서 버크스 팀이 우승했을 때, 쿼터백은 브래드 존슨 선수였습니다.
     4.04s  ⚡SPAN 주입 [d'=1.44s / d_lead=5.05s]: Brad Johnson was the quarterback for the Tampa Bay Buccaneers when the
     4.04s  user  발화 끝
     9.09s  user  발화 시작: 아, 그렇군요. 혹시 그 경기는 언제였죠?
     9.09s  agent 발화 끝
    11.97s  <ret> 발화 (turn3 첫 프레임)
    12.13s  agent 발화 시작: <ret> 말씀하신 슈퍼볼 삼십칠은 이천삼년에 열렸습니다.
    12.13s  ⚡SPAN 주입 [d'=1.12s / d_lead=2.53s]: Brad Johnson was the quarterback for the Tampa Bay Buccaneers when the
    12.13s  user  발화 끝
    14.65s  user  발화 시작: 네.
    14.65s  agent 발화 끝
    15.16s  user  발화 시작: 음… 그 경기에서 버크스 팀은 누구와 맞붙었죠?
    15.16s  user  발화 끝
    18.37s  <ret> 발화 (turn6 첫 프레임)
    18.69s  agent 발화 시작: <ret> 버크스 팀은 이천삼년 일월 이십육일 샌디에이고 퀄컴 스타디움에서 오클랜드 레이더스를 마흔여덟대 이
    18.69s  ⚡SPAN 주입 [d'=1.52s / d_lead=6.57s]: The Tampa Bay Buccaneers defeated the Oakland Raiders 48–21 in Super B
    18.69s  user  발화 끝
    25.26s  user  발화 시작: 아.
    25.26s  agent 발화 끝
    25.77s  agent 발화 시작: 슈퍼볼은 정말 짜릿한 경험을 선사하죠. 혹시 다른 스포츠 경기 정보도 필요하신가요?
    25.77s  user  발화 끝
    31.32s  user  발화 시작: 아, 아니에요. 그런데 드루낸 씨, 잠들기 전에 긴장을 푸는 데 도움이 되는 방법 좀 알려주시겠어요?
    31.32s  agent 발화 끝
    38.90s  agent 발화 시작: 잠들기 전에 따뜻한 물로 샤워를 하거나, 잔잔한 음악을 듣는 것이 도움이 될 수 있습니다.
    38.90s  user  발화 끝
    45.97s  user  발화 시작: 잠깐만, 아내가 전화하네…
    45.97s  agent 발화 끝
    47.49s  user  발화 시작: 아, 죄송해요. 다시 말씀해 주시겠어요?
    47.49s  user  발화 끝
    50.02s  agent 발화 시작: 괜찮습니다. 잠들기 전에 따뜻한 물로 샤워를 하거나, 잔잔한 음악을 듣는 것이 도움이 될 수 있다고 말씀드렸
    50.02s  user  발화 끝
    57.70s  <ret> 발화 (turn14 첫 프레임)
    58.10s  agent 발화 시작: <ret> 편안한 밤을 보내시길 바랍니다. 점진적 근육 이완은 몸 전체의 다양한 근육 그룹을 긴장시킨 다음 
    58.10s  agent 발화 끝
    58.66s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.02s]: Progressive muscle relaxation is a technique that involves tensing and
    67.70s  agent 발화 끝
