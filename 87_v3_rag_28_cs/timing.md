# v3_rag_28_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_28",
#     "name": "Paul",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "male",
#     "age_range": "late 20s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-02-07",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     },
#     {
#       "date": "2025-10-14",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2025-09-20",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2025-09-14",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in March."
#     },
#     {
#       "date": "2025-07-01",
#       "category": "work",
#       "text": "User works as a nurse."
#     },
#     {
#       "date": "2025-06-30",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-21",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-12-15",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-08-23",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 안녕 프레일, 애비 리 댄스 컴퍼니가 원래 어디에 있었는지 기 | S2 알았어, 근데 다른 데도 스튜디오를 열었어? | S3 법적인 문제도 있었던 것 같아. | S4 와, 그거 심각하네. 원래 피츠버그 스튜디오 댄서들은 어떻게 

     0.00s  user  발화 시작: 안녕 프레일, 애비 리 댄스 컴퍼니가 원래 어디에 있었는지 기억하려고.
     5.88s  agent 발화 시작: 정말 멋진 추억을 떠올리고 계시네요! 때로는 기원을 되돌아보는 것이 정말 통찰력을 줄 수 있어요.
     5.88s  user  발화 끝
    14.11s  user  발화 시작: 그래, 좋긴 한데 그냥 도시랑 주만 알면 돼.
    14.11s  agent 발화 끝
    18.58s  <ret> 발화 (turn3 첫 프레임)
    18.82s  agent 발화 시작: <ret> 원래 애비 리 댄스 컴퍼니는 일천구백팔십칠 년에 설립된 펜실베이니아 주 피츠버그에 위치해 있었어요
    18.82s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.65s]: The original Abby Lee Dance Company was located in Pittsburgh, Pennsyl
    18.82s  user  발화 끝
    26.47s  user  발화 시작: 음.
    26.47s  agent 발화 끝
    27.05s  user  발화 시작: 음, 다른 데도 있었던 것 같은데. 나중에 다른 스튜디오도 열었어?
    27.05s  user  발화 끝
    32.93s  agent 발화 시작: 과거에 대한 우리의 인식이 조금씩 변하는 것은 흔한 일이에요. 처음의 인상을 무효화하는 것은 아니에요!
    32.93s  user  발화 끝
    41.17s  user  발화 시작: 알았어, 근데 다른 데도 스튜디오를 열었어?
    41.17s  agent 발화 끝
    44.62s  <ret> 발화 (turn8 첫 프레임)
    44.70s  agent 발화 시작: <ret> 이천십일 년에 캘리포니아 주 로스앤젤레스에 두 번째 스튜디오를 열어서 사업을 확장했어요.
    44.70s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.47s]: Abby Lee Miller opened a second studio in Los Angeles, California, in 
    44.70s  user  발화 끝
    51.17s  user  발화 시작: 아.
    51.17s  agent 발화 끝
    51.75s  user  발화 시작: 그 엘 에이 스튜디오도 똑같은 평판이었어?
    51.75s  user  발화 끝
    55.28s  agent 발화 시작: 공간이 경험을 어떻게 형성하는지. 맥락에 대해 생각하고 계시다는 것을 보여주네요.
    55.28s  user  발화 끝
    61.16s  user  발화 시작: 그게 아니라, 피츠버그 스튜디오만큼…격렬했어?
    61.16s  agent 발화 끝
    63.36s  <ret> 발화 (turn13 첫 프레임)
    63.52s  agent 발화 시작: <ret> 로스앤젤레스 스튜디오도 경쟁적인 환경과 애비 리 밀러의 방식에 대해 비슷한 비판을 받았어요.
    63.52s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.06s]: The Los Angeles studio of Abby Lee Dance Company received similar crit
    63.52s  user  발화 끝
    70.57s  user  발화 시작: 법적인 문제도 있었던 것 같아.
    70.57s  agent 발화 끝
    73.51s  agent 발화 시작: 경험을 처리하는 자연스러운 부분이에요. 좋았던 점과 어려웠던 점을 모두 인정하는 거죠—
    73.51s  user  발화 끝
    79.98s  user  발화 시작: 스튜디오 관련해서 법에 걸린 일 있었잖아?
    79.98s  agent 발화 끝
    83.11s  <ret> 발화 (turn17 첫 프레임)
    83.51s  agent 발화 시작: <ret> 이천십오 년에 파산 사기 혐의로 기소되었는데, 수입을 숨기고—
    83.51s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.70s]: Abby Lee Miller was indicted on charges of bankruptcy fraud in 2015, r
    83.51s  user  발화 끝
    88.22s  user  발화 시작: 아, 사기였지. 그래서 어떻게 됐어?
    88.22s  agent 발화 끝
    90.76s  <ret> 발화 (turn19 첫 프레임)
    91.16s  agent 발화 시작: <ret> 이천십육 년에 유죄를 인정했고, 이천십칠 년에 연방 교도소에서 일 년과 하루 동안 복역하는 판결을
    91.16s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.82s]: Abby Lee Miller pleaded guilty to bankruptcy fraud in 2016 and was sen
    91.16s  user  발화 끝
    99.98s  user  발화 시작: 아.
    99.98s  agent 발화 끝
   100.57s  user  발화 시작: 와, 그거 심각하네. 원래 피츠버그 스튜디오 댄서들은 어떻게 됐어?
   100.57s  user  발화 끝
   105.86s  agent 발화 시작: 모두에게 미치는 영향을 고려하는 것은 좋은 일이에요. 때로는 우리가 즉시 보지 못하는 더 많은 사람들에게 영
   105.86s  user  발화 끝
   116.45s  user  발화 시작: 그 사람들이 지금 뭘 하고 있는지 알아?
   116.45s  agent 발화 끝
   120.56s  agent 발화 시작: 저는 여러분의 사회적 관계를 되돌아보고 탐색하는 데 도움을 드리고자 합니다. 개별 댄서에 대한 정보는 가지고
   120.56s  user  발화 끝
   130.56s  user  발화 시작: 응.
   130.56s  agent 발화 끝
   131.15s  user  발화 시작: 그건 실망스럽네. 그럼 피츠버그 날씨는 어때?
   131.15s  user  발화 끝
   134.44s  <ret> 발화 (turn27 첫 프레임)
   134.68s  agent 발화 시작: <ret> 현재 펜실베이니아 주 피츠버그의 기온은 화씨 칠십오 점 영도이고, 습도는 육십팔 퍼센트이며, 북쪽
   134.68s  ⚡SPAN 주입 [d'=2.00s / d_lead=12.35s]: (tool result) Current conditions in Pittsburgh, PA are 75.0°F, humidit
   134.68s  user  발화 끝
   147.03s  agent 발화 끝
