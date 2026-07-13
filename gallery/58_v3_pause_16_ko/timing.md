# v3_pause_16_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pause_16",
#     "name": "수호",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "40s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-04",
#       "category": "home",
#       "text": "User's home address is 경기 성남시 분당구 판교로 235."
#     },
#     {
#       "date": "2026-03-25",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2026-02-28",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     },
#     {
#       "date": "2025-12-13",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     },
#     {
#       "date": "2025-12-03",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-23",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2026-04-24",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 미시간 주립대학교 농구팀이 전국 우승을 언제 했는지 궁금해. | S2 …말고 다른 거 알아봐 줄 수 있어? | S3 소련이 보이콧했구나. 왜 그랬던 거야? | S4 맞아, 나도 유도 좋아해. 혹시 그 해에 유도 외에 다른 한국

     0.00s  user  발화 시작: 미시간 주립대학교 농구팀이 전국 우승을 언제 했는지 궁금해.
     4.68s  agent 발화 시작: 네네.
     4.68s  user  발화 끝
     4.78s  <ret> 발화 (turn2 첫 프레임)
     5.27s  agent 발화 시작: <ret> 미시간 주립대학교 농구팀은 천구백칠십구년에 인디애나 주립대학교를 꺾고 엔 씨 에이 에이 토너먼트에
     5.27s  agent 발화 끝
     5.77s  ⚡SPAN 주입 [d'=0.99s / d_lead=8.78s]: Michigan State University’s men’s basketball team won the NCAA Tournam
    14.05s  user  발화 시작: 응.
    14.05s  agent 발화 끝
    14.64s  user  발화 시작: 음… 농구는 그냥 그래. 다른…
    14.64s  user  발화 끝
    17.57s  user  발화 시작: …스포츠도 알아봐 줄 수 있어?
    17.57s  user  발화 끝
    20.49s  agent 발화 시작: 음.
    20.49s  user  발화 끝
    21.08s  agent 발화 시작: 다른 스포츠도 물론 알아볼 수 있습니다. 혹시 어떤 스포츠에 관심 있으신가요?
    21.08s  agent 발화 끝
    27.52s  user  발화 시작: 야구는 어때?
    27.52s  agent 발화 끝
    28.33s  <ret> 발화 (turn9 첫 프레임)
    28.69s  agent 발화 시작: <ret> 디트로이트 타이거즈는 천구백팔십사년에 샌디에이고 파드리스를 꺾고 월드시리즈에서 우승했습니다. 야구
    28.69s  user  발화 끝
    28.71s  ⚡SPAN 주입 [d'=0.39s / d_lead=5.86s]: The Detroit Tigers won the World Series in 1984, defeating the San Die
    34.54s  user  발화 시작: 응응.
    34.54s  agent 발화 끝
    35.13s  user  발화 시작: 맞아, 엄청 좋아해. 근데… 야구팀 우승…
    35.13s  user  발화 끝
    38.64s  user  발화 시작: …말고 다른 거 알아봐 줄 수 있어?
    38.64s  user  발화 끝
    42.74s  agent 발화 시작: 야구팀 우승 말고 다른 것을 원하시나요? 어떤 정보를 더 드릴까요?
    42.74s  user  발화 끝
    48.60s  user  발화 시작: 음… 예를 들면, 그 해에 무슨 영화가 인기 있었는지?
    48.60s  agent 발화 끝
    53.37s  <ret> 발화 (turn15 첫 프레임)
    53.87s  agent 발화 시작: <ret> 천구백팔십사년에 가장 흥행한 영화는 ‘비버리힐스 캅’으로, 전 세계적으로 삼억 일천 육백만 달러 
    53.87s  user  발화 끝
    54.86s  ⚡SPAN 주입 [d'=1.48s / d_lead=11.12s]: The top-grossing film of 1984 was Beverly Hills Cop, earning over $316
    64.99s  user  발화 시작: 와.
    64.99s  agent 발화 끝
    65.58s  user  발화 시작: 아, 그 영화 알지. 엄청 웃겼어. 그런데…
    65.58s  user  발화 끝
    69.68s  agent 발화 시작: 그 영화는 정말 재밌었죠—
    69.68s  user  발화 끝
    72.02s  user  발화 시작: …혹시 그 해에 다른 스포츠 경기에서 특별한 일이 있었는지 궁금해.
    72.02s  agent 발화 끝
    77.82s  <ret> 발화 (turn20 첫 프레임)
    77.87s  agent 발화 시작: <ret> 특별한 스포츠 경기라… 천구백팔십사년에는 로스앤젤레스 올림픽이 열렸습니다.
    77.87s  user  발화 끝
    78.12s  ⚡SPAN 주입 [d'=0.30s / d_lead=4.10s]: The 1984 Summer Olympics, held in Los Angeles, California, were boycot
    81.97s  agent 발화 시작: 천구백팔십사년에는 캘리포니아주 로스앤젤레스에서 하계 올림픽이 개최되었는데, 소련과 여러 동유럽 국가들이 보이
    81.97s  agent 발화 끝
    88.41s  user  발화 시작: 소련이 보이콧했구나. 왜 그랬던 거야?
    88.41s  agent 발화 끝
    90.89s  <ret> 발화 (turn23 첫 프레임)
    91.34s  agent 발화 시작: <ret> 소련과 동맹국들은 보안 문제와 반소련 선전이라고 생각하는 점을 천구백팔십사년 로스앤젤레스 올림픽 
    91.34s  user  발화 끝
    92.17s  ⚡SPAN 주입 [d'=1.28s / d_lead=8.20s]: The Soviet Union and its allies cited security concerns and what they 
    99.54s  user  발화 시작: 오.
    99.54s  agent 발화 끝
   100.12s  user  발화 시작: 아, 그렇구나. 그럼 그 올림픽에서 한국은 얼마나 잘했어?
   100.12s  user  발화 끝
   104.81s  agent 발화 시작: 네.
   104.81s  user  발화 끝
   104.97s  <ret> 발화 (turn27 첫 프레임)
   105.39s  agent 발화 시작: <ret> 한국은 천구백팔십사년 로스앤젤레스 하계 올림픽에서 금메달 여섯개, 은메달 여섯개, 동메달 일곱개를
   105.39s  agent 발화 끝
   106.06s  ⚡SPAN 주입 [d'=1.09s / d_lead=7.03s]: South Korea won six gold medals, six silver medals, and seven bronze m
   112.42s  user  발화 시작: 꽤 많이 땄네. 혹시 그 올림픽에서 한국 선수 중에 가장 유명한 사람이 누구였어?
   112.42s  agent 발화 끝
   119.99s  <ret> 발화 (turn29 첫 프레임)
   120.03s  agent 발화 시작: <ret> 안병근 선수는 유도 육십오킬로그램 이하급에서 금메달을 획득하며 한국 유도 역사상 첫 올림픽 금메달
   120.03s  user  발화 끝
   120.39s  ⚡SPAN 주입 [d'=0.40s / d_lead=8.20s]: An Byeong-geun won the gold medal in the under 65 kg category of judo 
   128.23s  user  발화 시작: 그치.
   128.23s  agent 발화 끝
   128.81s  user  발화 시작: 유도 선수구나. 대단하네.
   128.81s  user  발화 끝
   130.57s  agent 발화 시작: 네, 정말 대단하셨죠. 유도는 한국에서 인기 있는 스포츠 중 하나입니다.
   130.57s  user  발화 끝
   136.42s  user  발화 시작: 맞아, 나도 유도 좋아해. 혹시 그 해에 유도 외에 다른 한국 스포츠에서도 좋은 성적을 거둔 팀이 있었어?
   136.42s  agent 발화 끝
   146.01s  <ret> 발화 (turn34 첫 프레임)
   146.38s  agent 발화 시작: <ret> 한국 남자 양궁팀은 천구백팔십사년 로스앤젤레스 하계 올림픽에서 은메달을 획득했습니다.
   146.38s  user  발화 끝
   147.21s  ⚡SPAN 주입 [d'=1.21s / d_lead=5.27s]: South Korea’s men’s archery team won a silver medal at the 1984 Summer
   151.65s  user  발화 시작: 오.
   151.65s  agent 발화 끝
   152.23s  user  발화 시작: 양궁도 잘했구나. 혹시 그 때 올림픽 개막식에 누가 왔었어?
   152.23s  user  발화 끝
   156.91s  <ret> 발화 (turn37 첫 프레임)
   157.50s  agent 발화 시작: <ret> 천구백팔십사년 로스앤젤레스 하계 올림픽 개막식은 미국의 로널드 레이건 대통령이 공식적으로 개막했습
   157.50s  user  발화 끝
   157.55s  ⚡SPAN 주입 [d'=0.64s / d_lead=6.44s]: U.S. President Ronald Reagan officially opened the 1984 Summer Olympic
   163.94s  user  발화 시작: 맞아.
   163.94s  agent 발화 끝
   164.53s  user  발화 시작: 로널드 레이건 대통령이었구나.
   164.53s  user  발화 끝
   166.28s  agent 발화 시작: 네, 그렇습니다. 레이건 대통령은 당시 미국의 대통령이었습니다.
   166.28s  user  발화 끝
   170.38s  user  발화 시작: 아니, 오늘은 여기까지 할게. 고마워, 비올.
   170.38s  agent 발화 끝
   173.89s  agent 발화 시작: 천만에요. 언제든지 궁금한 점이 있으면 저를 찾아주세요. 즐거운 하루 보내세요.
   173.89s  user  발화 끝
   179.75s  agent 발화 끝
