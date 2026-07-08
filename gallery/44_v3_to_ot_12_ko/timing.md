# v3_to_ot_12_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: 마침 궁금했는데, 마이클 잭슨의 “Beat It” 기타 솔로를 누가 연주했는지 궁금했어요. 다른 곡들과는 좀
     6.64s  <ret> 발화 (turn1 첫 프레임)
     6.91s  user  발화 끝
     7.04s  agent 발화 시작: <ret> 정말 날카로운 관찰이세요, “Beat It”에 대해서요.
     8.24s  ⚡SPAN 주입 [d'=1.60s / d_lead=2.58s]: <Eddie Van Halen performed the guitar solo on Michael Jackson’s “Beat 
     9.61s  agent 발화 시작: 에디 반 헤일런이 천구백팔십이 년에 그 유명한 기타 솔로를 연주했습니다.
     9.62s  agent 발화 끝
    14.51s  user  발화 시작: 와, 에디 반 헤일런이요? 마이클 잭슨과 함께 작업했다는 건 몰랐어요. 정말 의외의 조합이네요.
    14.53s  agent 발화 끝
    20.03s  agent 발화 시작: 네, 당시로서는 꽤 예상치 못한 조합이었죠.
    20.11s  user  발화 끝
    22.15s  agent 발화 끝
    22.19s  user  발화 시작: 저기요, 혹시 냉동고에서 닭고기를 꺼내 놓으셨어요?
    25.11s  user  발화 시작: 죄송합니다. 다시 음악 이야기로 돌아가서, 그분이 솔로 연주자로 처음 선택된 건가요, 아니면 다른 분들도 먼
    25.24s  user  발화 끝
    31.90s  <ret> 발화 (turn7 첫 프레임)
    31.98s  agent 발화 시작: <ret> 초기 고려 사항을 확인해 보니… 퀸시 존스가 먼저 에릭 클랩튼과 제프 벡에게 부탁했지만, 그분들은
    32.10s  user  발화 끝
    33.18s  ⚡SPAN 주입 [d'=1.28s / d_lead=2.17s]: <Quincy Jones initially sought Eric Clapton and Jeff Beck for the solo
    40.64s  agent 발화 끝
    41.12s  user  발화 시작: 그럼 반 헤일런은 거의 마지막 보루였다는 건가요? 그분이 곡에 참여하게 된 게 정말 놀랍네요.
    46.96s  user  발화 끝
